import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalType } from '../success/success.component';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss']
})
export class FailComponent {
  modalTitle: string;
  modalMessage: string;
  modalType:ModalType = ModalType.WARN;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    
    // console.log(data)
  }
}
