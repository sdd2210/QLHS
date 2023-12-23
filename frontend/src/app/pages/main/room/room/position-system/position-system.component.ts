import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news.model';
import { SettingModel } from 'src/app/models/setting.model';
import { RoleService } from 'src/app/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-position-system',
  templateUrl: './position-system.component.html',
  styleUrls: ['./position-system.component.scss']
})
export class PositionSystemComponent implements OnInit {
  config = new SettingModel;
  listActive = [];
  tableData;
  data = [];
  constructor(
    private router: Router,
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.listActive = this.config.btnActice;
    this.tableData = this.config.collums;
    this.getListRole();
  }
  getListRole() {
    this.roleService.getListRole().subscribe(res => {
      this.data = res.reverse();
      this.data.forEach((x, index) => {
        x.stt = index + 1;
      });
    })
  }
  handleTableCallback(ev) {
    if (ev.type === "create") {
      this.router.navigateByUrl('/main/setting/create-position')
    }
    if (ev.type === "edit") {
      this.router.navigateByUrl(`/main/setting/edit-position/${ev.item.RoleId}`)
    }
    if (ev.type === 'delete-all') {
      Swal.fire({
        text: "Bạn muốn xoá thông báo này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          for (let index = 0; index < ev.item.length; index++) {
            this.roleService.deleteRole(ev.item[index].RoleId).subscribe(res => {
              this.getListRole();
            })
          }
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xoá thành công!',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    if (ev.type === 'delete') {
      Swal.fire({
        text: "Bạn muốn xoá thông báo này không?",
        showCancelButton: true,
        cancelButtonColor: '#3085d6',
        confirmButtonColor: '#d33',
        cancelButtonText: 'Huỷ',
        confirmButtonText: 'Xoá'
      }).then((result) => {
        if (result.isConfirmed) {
          this.roleService.deleteRole(ev.item.RoleId).subscribe(res => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Xoá thành công!',
              showConfirmButton: false,
              timer: 1500
            })
            this.getListRole();
          })
        }
      })
    }
  }

}
