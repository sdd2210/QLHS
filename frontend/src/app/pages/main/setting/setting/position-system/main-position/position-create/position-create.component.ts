import { Component, OnInit } from '@angular/core';
import { SchoolGradeLevelService } from 'src/app/services/school-grade-level.service';

@Component({
  selector: 'app-position-create',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.scss']
})
export class PositionCreateComponent implements OnInit {

  constructor(
    private levelService: SchoolGradeLevelService
  ) { }

  columnMember: any = [

    {
      name: "Mầm non",
      id: "pre-school"
    },
    {
      name: "Cấp 1"
    },
    {
      name: "Cấp 2"
    },
    {
      name: "Cấp 3"
    }
  ];
  dataRole = [
    {
        "PolicyId": 1,
        "Name": "QUẢN LÝ LỚP HỌC",
        "PrivilegeList": [
            {
                "PrivilegeId": 1,
                "Name": "Xem lớp",
                "SchoolLevelList": [
                    {
                        "SchoolLevelId": 1,
                        "Name": "Mầm non",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    },
                    {
                        "SchoolLevelId": 2,
                        "Name": "Cấp 1",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 3,
                        "Name": "Cấp 2",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 4,
                        "Name": "Cấp 3",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    }
                ]
            },
            {
                "PrivilegeId": 2,
                "Name": "Sửa lớp",
                "SchoolLevelList": [
                    {
                        "SchoolLevelId": 1,
                        "Name": "Mầm non",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    },
                    {
                        "SchoolLevelId": 2,
                        "Name": "Cấp 1",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 3,
                        "Name": "Cấp 2",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 4,
                        "Name": "Cấp 3",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    }
                ]
            }
        ]
    },
    {
        "PolicyId": 2,
        "Name": "QUẢN LÝ HỌC SINH",
        "PrivilegeList": [
            {
                "PrivilegeId": 5,
                "Name": "Xem học sinh",
                "SchoolLevelList": [
                    {
                        "SchoolLevelId": 1,
                        "Name": "Mầm non",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    },
                    {
                        "SchoolLevelId": 2,
                        "Name": "Cấp 1",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 3,
                        "Name": "Cấp 2",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 4,
                        "Name": "Cấp 3",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    }
                ]
            },
            {
                "PrivilegeId": 6,
                "Name": "Thêm học sinh",
                "SchoolLevelList": [
                    {
                        "SchoolLevelId": 1,
                        "Name": "Mầm non",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    },
                    {
                        "SchoolLevelId": 2,
                        "Name": "Cấp 1",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 3,
                        "Name": "Cấp 2",
                        "RoleSchoolLevelPrivilegeStatus": 0
                    },
                    {
                        "SchoolLevelId": 4,
                        "Name": "Cấp 3",
                        "RoleSchoolLevelPrivilegeStatus": 1
                    }
                ]
            }
        ]
    }
]
  ngOnInit(): void {
    
 

     this.levelService.getListLevel().subscribe(res => {
       console.log(res);
     })
  }
  selectAllSchool(value, checked){
 
  }
  selectAll(check, item){
    // this.dataTable.forEach(x => {
    //     x.check = check;
    // });
    
  }
  changeEvent(value, listSchoolLevel, ListRole){
    console.log(value, listSchoolLevel, ListRole);
    
  }

}
