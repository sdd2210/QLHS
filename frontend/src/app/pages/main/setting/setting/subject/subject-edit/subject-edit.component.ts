import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { SubjectService } from 'src/app/services/subject.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss']
})
export class SubjectEditComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SubjectEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: HttpClient,
    public handle: HttpBackend,
    private SubjectService: SubjectService,
    private employeeService: EmployeeService
  ) { this.http = new HttpClient(handle); }
  tags: any = [];
  inputVisible = false;
  inputValue = '';
  @ViewChild('inputElement', { static: false }) inputElement?: ElementRef;
  gradeName: string;
  gradeId: number;
  results: any = [];
  timer;
  model: any = [];
  listUserprofileId: any = [];
  listTeacher: any = [];
  ngOnInit(): void {
    this.model = this.data;
    console.log(this.data)
    this.model.GradeId = this.data.grade_id;
    this.tags = this.data.ListTeachers.filter(x => x.TeacherName !== null);
    this.getListTeacher();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  handleClose(removedTag: {}): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
    if (this.tags.length === 0) {
      this.inputVisible = false;
      this.inputValue = "";
      this.results = [];
    }
  }

  sliceTagName(tag: string): string {
    const isLongTag = tag.length > 20;
    return isLongTag ? `${tag.slice(0, 20)}...` : tag;
  }

  showInput() {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement?.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue && this.tags.indexOf(this.inputValue) === -1) {
      this.tags = [...this.tags, this.inputValue];
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
  clickSelectItem(ev) {
    this.tags.push(ev);
    this.inputVisible = false;
    this.results = [];
    this.inputValue = "";
    console.log(this.tags);
    
  }
  getListTeacher() {
    this.employeeService.getListEmployee('').subscribe(res => {
      this.listTeacher = res.map(x => {
        return {
          TeacherName: x.LastName || "",
          MediaURL: x.MediaURL,
          Phone: x.Phone,
          UserprofileId: x.UserprofileId
        }
      })
      console.log(this.listTeacher);
      
    })
  }
  setDefaultImg(item) {
    item.MediaURL = 'assets/img/default-avatar.jpg';
  }
  onSearchKey = (keyword) => {
    if (!keyword) {
      this.results = [];
    }
    else {
      this.results = this.listTeacher.filter(x => x.TeacherName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
      for (let index = 0; index < this.tags.length; index++) {
        let check = this.tags[index].UserprofileId;
        let item = this.results.findIndex(x => x.UserprofileId === check);
        if (item == undefined) {
          return this.results = []
        }
        else {
          this.results.splice(item, 1);
        }
        console.log(this.results);
      }
    }
  }
  getUnique(arr, comp) {

    const unique = arr
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e]).map(e => arr[e]);
    console.log(unique);
    return unique;
  }

  saveFunction(){
      
      this.tags.forEach(x => {
        this.listUserprofileId.push(x.UserprofileId);
      });    
      let model = {
        "name": this.model.name,
        "grade_id": this.model.grade_id,
      }
      this.SubjectService.editSubject(this.data._id, model).subscribe(res => {
        this.closeDialog();
      });
  }

}
