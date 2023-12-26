import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateMemberComponent } from './create-member/create-member.component';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private roomSv: MemberService
  ) { }
  user_id;
  data;
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('access_user'));
    if(user.role_key == 'ADMIN')
    {
      this.user_id = user._id;
    }
    this.roomSv.getAllRoom(undefined).subscribe(res=>{
      this.data = res
    })
  }
  routerTo(ev) {
    this.router.navigate([`/main/member/member-home/class/${ev._id}`])
  }
  delete(ev){
    Swal.fire({
      text: "Bạn muốn xoá phòng này không?",
      showCancelButton: true,
      cancelButtonColor: '#3085d6',
      confirmButtonColor: '#d33',
      cancelButtonText: 'Huỷ',
      confirmButtonText: 'Xoá'
    }).then((result) => {
      if (result.isConfirmed) {
        this.roomSv.deleteRoom(ev._id).subscribe(res => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Xoá phòng thành công!',
            showConfirmButton: false,
            timer: 1500
          })
          this.roomSv.getAllRoom(undefined).subscribe(res=>{
            this.data = res
          })
        }, (err) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: err.error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        })
      }
    })
  }
  createClass(){
    this.dialog.open(CreateMemberComponent, {
      //   width: '500px',
      //   height: '350px',
        disableClose: true,
      }).afterClosed().subscribe(result => {

      });
  }
  // searchMember(keyword){
  //   return this.memberService.getListStudent(keyword).pipe(map((res: any) => res));
  // }
  // onSearchKey = (keyword) => {
  //   if (!keyword) {
  //       this.results = [];
  //   }
  //   else {
  //       clearTimeout(this.timer);
  //       this.timer = setTimeout(() => {
  //           this.spinner = true;
  //           this.searchMember(keyword).subscribe(res => {
  //               this.results = res.original;
  //               this.spinner = false;
  //           })
  //       }, 500);
  //   }

  // }
}
