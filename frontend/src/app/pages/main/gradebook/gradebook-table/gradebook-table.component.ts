import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MemberService } from 'src/app/services/member.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';
import { lastValueFrom } from 'rxjs';
import { SchoolYearService } from 'src/app/services/schoolyear.service';
import { GradebookService } from 'src/app/services/gradebook.service';

@Component({
  selector: 'app-gradebook-table',
  templateUrl: './gradebook-table.component.html',
  styleUrls: ['./gradebook-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class GradebookTableComponent implements OnInit {
  columnsToDisplay = [];
  columnsToDisplayWithExpand = [{ display: 'expand', value: 'expand' }];
  constructor(
    private dialog: MatDialog,
    private activeRouter: ActivatedRoute,
    private schoolGradeLevel: SchoolGradeLevelService,
    private schoolLevelGrade: SchoolGradeLevelService,
    private schoolYearService: SchoolYearService,
    private gradebookService: GradebookService,
    private scheduleService: ScheduleService,
    private memberService: MemberService,
    private render: Renderer2,
    private el: ElementRef
  ) {}
  classId;
  gradeId;
  timer;
  subjectId = 'all';
  semesterId;
  detailClass: any = {};
  listSubject: any[];
  listStudent: any[];
  listTest = [];
  listGrade = [];
  listGradeBook = [];
  listExam = [];
  count = 0;
  numberPage = 5;
  totalPage: number;
  currentPage: number = 1;
  data: any[];
  dataTmp: any[];
  async ngOnInit(): Promise<void> {
    this.classId = this.activeRouter.snapshot.params.classId;
    let test = this.schoolYearService.getCurrentSchoolYear();
    const next = await lastValueFrom(test);
    this.semesterId = `${next.semester.order}`;
    await this.getClassDetail();
    await this.getListSubject();
    await this.getListStudentOfClass();
    await this.getSubjectAll();
  }
  checkValue(ev) {}
  changeSelect(value, target) {
    if (target == 'semester') {
      this.semesterId = value;
    }
    if (target == 'subject') {
      console.log(value);
      this.subjectId = value;
      if (value !== 'all') {
        this.getSubjectGrade(this.subjectId);
      } else {
        this.dataTmp = [];
        this.getSubjectAll();
      }
    }
  }
  getAllTotal(itemroot, student_id) {
    if(this.subjectId == 'all')
    {
      return 0;
    }
    const item_i = this.dataTmp?.findIndex(x=>x._id == student_id)
    if(item_i > -1)
    {
      const item = this.dataTmp[item_i].value;
      const msc = item.reduce(
        (acc, { value, test_id }) =>
          (acc += +(
            value.filter(x=>x != '').length *
              this.listTest.find((x) => x._id == test_id).priority || 0
          )),
        0
      );
      const sum = item.reduce(
        (acc, { value, test_id }) =>
          (acc += +(
            value.reduce((acc2, cur) => (acc2 += +(Number(cur) || 0)), 0) *
              this.listTest.find((x) => x._id == test_id).priority || 0
          )),
        0
      );
      return (sum/(msc ? msc : 1)).toFixed(2) ;
    }
    return 0 ;
  }
  async getSubjectAll() {
    this.listTest = JSON.parse(JSON.stringify(this.listSubject.filter((x,i)=> i!= 0)));
    this.listExam = [];
    let test = this.gradebookService.getListGradebookByQuery(this.classId,null,null,Number(this.semesterId));
    let test_infor = await lastValueFrom(this.schoolGradeLevel.getListTest())
    const next = await lastValueFrom(test);
    for(let i = 0; i< this.data.length ; i++)
    {
      let new_value = this.data[i].value
      for(let j = 0; j< this.listTest.length ; j++)
      {
        const found = next.find(x=>x._id == this.listTest[j]._id);
        if(found != undefined)
        {
          const grade = found.value[i].list_test;
          if(grade)
          {
            const last_grade = grade.map(x=>{
              const same = test_infor.find(o=>o._id == x.test_id)
              x.priority = same.priority;
              x.length = x.value.split('|').length;
              x.value = x.value.split('|').reduce((a,c)=>a+Number(c),0)
              return x;
            })
            new_value[j] = {value: [
              (last_grade.reduce((a,c)=>a+Number(c.value*c.priority),0)/
              last_grade.reduce((a,c)=>a+Number(c.length*c.priority),0)).toFixed(2)
            ]};
          }else
            new_value[j] = {value: ['0']};
        }else{
          new_value[j] = {value: ['0']};
        }
      }
    }
    // for(let i = 0; i< this.listTest.length ; i++)
    // {
    //   const found = next.findIndex(x=>x._id == this.listTest[i]._id);
    //   console.log(found)
      
    //     for(let j = 0; j< this.data.length ; j++)
    //     {
    //       if(found > -1){
    //         this.data[j].value[i].value[0] = 2;
    //       }
    //     }
    // } 
    // this.listExam = [];
    // if(this.subjectId == "all")
    // {
    //   this.listTest = this.listSubject;
    //   this.listExam = [];
    // }else{
    //   this.schoolGradeLevel.getListTest().subscribe(res => {
    //     this.listTest = res.map(x => ({ ...x, list_exam: x.list_exam.map(o => ({ ...o, test_id: x._id })) }));
    //     this.listExam = this.listTest.reduce((prev, cur) => prev.concat(cur.list_exam), []);
    //   });
    // }
  }
  async getSubjectGrade(subject_id) {
    if (subject_id == 'all') {
      return;
    }

    if (this.subjectId == 'all') {
      this.listTest = this.listSubject;
      this.listExam = [];
    } else {
      let grade = this.schoolGradeLevel.getListTest();
      const nextgrade = await lastValueFrom(grade);
      this.listTest = nextgrade.map((x) => ({
        ...x,
        list_exam: x.list_exam.map((o) => ({ ...o, test_id: x._id })),
      }));
      this.listExam = this.listTest.reduce(
        (prev, cur) => prev.concat(cur.list_exam),
        []
      );
      let test = this.gradebookService.getListGradebookByQuery(
        this.classId,
        subject_id,
        null,
        Number(this.semesterId)
      );
      const next = await lastValueFrom(test);
      if (next) {
        this.data = await this.data.map((x) => {
          const found = next.find((o) => o.student_id == x._id);
          
          x.value = this.listTest.map((x) => ({
            test_id: x._id,
            value: x.list_exam.map((o) => ''),
          }));
          if (found) {
            var ids = found.list_test.map((d) => d.test_id);
            x.value = [
              ...found.list_test.reduce(
                (a, c) =>
                  a.concat({
                    ...c,
                    value: c.value.split('|'),
                  }),
                []
              ),
              ...x.value.filter((d) => !ids.includes(d.test_id)),
            ];
          }
          return x;
        });
        this.dataTmp = JSON.parse(JSON.stringify(this.data));
      }
    }
  }
  getTotal(itemroot, student_id) {
    if(this.subjectId == 'all')
    {
      const data = itemroot.map(x=>Number(x.value[0]))
      return (data.reduce((a,c)=>a+c,0)/data.length).toFixed(2);
    }
    const item_i = this.dataTmp?.findIndex(x=>x._id == student_id)
    if(item_i > -1)
    {
      const item = this.dataTmp[item_i].value;
      const msc = item.reduce(
        (acc, { value, test_id }) =>
          (acc += +(
            value.filter(x=>x != '').length *
              this.listTest.find((x) => x._id == test_id).priority || 0
          )),
        0
      );
      const sum = item.reduce(
        (acc, { value, test_id }) =>
          (acc += +(
            value.reduce((acc2, cur) => (acc2 += +(Number(cur) || 0)), 0) *
              this.listTest.find((x) => x._id == test_id).priority || 0
          )),
        0
      );
      return (sum/(msc ? msc : 1)).toFixed(2) ;
    }
    return 0 ;
  }
  clickSave() {
    this.listGradeBook = this.dataTmp.map(x=>{
      return {
        student_id: x._id,
        list_test: x.value.map(o=>({test_id: o.test_id, value: o.value.join('|')}))
      }
    })
    this.gradebookService
      .createGradeBook(
        this.classId,
        this.subjectId,
        this.listGradeBook,
        this.semesterId
      )
      .subscribe((res) => console.log(res));
  }
  selectAll(value) {
    this.data.forEach((x, index) => {
      x.check = value;
    });
  }
  async getClassDetail() {
    const test = this.schoolGradeLevel.getClassById(this.classId);
    const next = await lastValueFrom(test);
    this.detailClass = next;
    this.gradeId = next.grade_id;
  }
  async getListSubject() {
    const test = this.schoolLevelGrade.getSubjectOfGrade(this.gradeId);
    const next = await lastValueFrom(test);
    this.listSubject = [{ _id: 'all', name: 'Tất cả', list_exam: [] }].concat(
      next.map((x) => ({ ...x, list_exam: [] }))
    );
    // this.subjectId = next[1]._id;
  }
  async getListStudentOfClass() {
    let test = this.memberService.getListStudentClass(this.classId);
    const next = await lastValueFrom(test);
    this.listStudent = next.original;
      this.listStudent.forEach((x, index) => {
        x.stt = index + 1;
        x.check = false;
        x.isExpand = false;
        x.value = new Array(this.listSubject.length-1).fill({value: ['']});
        x.avg = 0;
      });
      this.data = this.listStudent;
      this.totalPage = this.data?.length ?? 0;
    
    if (this.subjectId == 'all') {
      this.listTest = this.listSubject;
      
    } else {
      this.schoolGradeLevel.getListTest().subscribe((res) => {
        this.listTest = res.map((x) => ({
          ...x,
          list_exam: x.list_exam.map((o) => ({ ...o, test_id: x._id })),
        }));
        this.listExam = this.listTest.reduce(
          (prev, cur) => prev.concat(cur.list_exam),
          []
        );
      });
    }
  }
  keyPress(event: KeyboardEvent) {
    const pattern = /^(?:[0-9]|0[1-9]|10)?(\.[0-9]{1,2})?$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  ngOnChanges(changes: any, student_id: any, test_id: any, index: any): void {
    const foundindex = this.dataTmp?.findIndex((x) => x._id == student_id);
    this.dataTmp[foundindex].value = this.dataTmp[foundindex].value.map(x=>{
      if(test_id == x.test_id){
        x.value[index] =  changes;
      }
      return x;
    })
    
    // if (index < 0) {
    //   this.listGrade.push({ student_id, exam: [{ ...exam, value: changes }] });
    // } else {
    //   const test = this.listGrade[index].exam.findIndex(
    //     (x) =>
    //       x.test_id == exam.test_id &&
    //       x.exam_id == exam.exam_id &&
    //       x.order == exam.order
    //   );
    //   if (test < 0) {
    //     this.listGrade[index].exam.push({ ...exam, value: changes });
    //   } else {
    //     this.listGrade[index].exam[test].value = changes;
    //   }
    // }
  }
  edit(_id,test_id, index,stt){
    console.log(`.${'myDiv'+(stt+1)}${index}${test_id}`);
    // this.el.nativeElement.querySelector(`.${'myDiv'+(stt+1)}${index}${test_id}`).focus();
    this.render.selectRootElement(`.${'myDiv'+(stt+1)}${index}${test_id}`).focus();
  }
}
