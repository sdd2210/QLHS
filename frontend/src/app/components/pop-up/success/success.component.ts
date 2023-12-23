import { CommonModule } from '@angular/common';
import { Component, Inject, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseButtonModule } from '../../button/base-button/base-button.component';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  modalTitle: string;
  modalMessage: string;
  modalType:ModalType = ModalType.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    
    console.log(this)
  }
}

export enum ModalType {
  INFO = 'info',
  WARN = 'warn'
}

@NgModule({
  declarations: [SuccessComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseButtonModule, MatDialogModule],
  exports: [SuccessComponent],
})
export class SuccessComponentModule {}