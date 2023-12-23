import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<AddEmployeeComponent>,

  ) { }
  listSearch;
  timer;
  search: string;
  listEmployee: any = [];
  result: any = [];
  listSelected: any = [];
  ngOnInit(): void {
    this.getListEmployee();

  }

  getListEmployee() {
    this.employeeService.getListEmployee("").subscribe(res => {
      this.listEmployee = res.map(x => {
        return {
          LastName: x.full_name || "",
          MediaURL: x.MediaURL||"",
          Phone: x.phone,
          UserprofileId: x._id
        }
      })
    })
  }

  searchEmployee(keyword) {
    if (!keyword) {
      this.result = [];
    }
    else {
      this.result = this.listEmployee.filter(x => x.LastName.toLowerCase().indexOf(keyword) > -1);
      for (let index = 0; index < this.listSelected.length; index++) {
        let check = this.listSelected[index].UserprofileId;
        let item = this.result.findIndex(x => x.UserprofileId === check);
        if (item == undefined) {
          return this.result = [];
        }
        else {
          this.result.splice(item, 1);
        }
        console.log(this.result);
      }
    }
  }
  selectItem(item) {
    this.search = "";
    this.listSelected.push(item);
    this.result = [];
  }
  removeItem(index) {
    this.listSelected.splice(index, 1);
  }
  save() {
    let profileIdList = [];
    this.listSelected.forEach(x => {
      profileIdList.push(x.UserprofileId);
    });
    let model = {
      "RoleId": this.data.RoleId,
      "UserprofileIdList": profileIdList
    }
    this.employeeService.assignPositionForEmployee(model).subscribe(res => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Gán quyền thành công!',
        showConfirmButton: false,
        timer: 1500
      })
      this.dialogRef.close();
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
