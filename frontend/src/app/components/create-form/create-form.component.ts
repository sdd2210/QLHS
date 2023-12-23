import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { Editor, NgxEditorModule } from 'ngx-editor';


@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() option: any;
  @Input() error: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Input() checkFile?: any;
  @Output() callback = new EventEmitter<any>();
  @Output() handleSelectChange = new EventEmitter<any>();
  fileImport: any = {};
  html: '' = "";
  model: any = {};
  chip_data: any = {};
  imagePath: any;
  imgURL!: any;
  errorCreate!: any;
  arrayBuffer: any;
  checkErrorEmail = false;
  checkErrorPhone = false;
  file!: any;
  dataImport: any;
  checkBeforeUnload = false;
  editor: Editor;
  constructor(
  ) { }
  ngOnChanges(): void {
    this.errorCreate = this.error || [];
    console.log(this.error);
    
    if (this.errorCreate.length !== 0) {
      if (this.error.includes("SĐT")) {
        this.checkErrorEmail = false;
        this.checkErrorPhone = true;
      }
      else if (this.errorCreate.length === 1 && this.errorCreate[0].indexOf("Email") > -1) {
        this.checkErrorEmail = true;
        this.checkErrorPhone = false;
      }
      else if (this.errorCreate.length === 1 && this.errorCreate[0].indexOf("Name") > -1) {
        this.checkErrorPhone = true;
        this.checkErrorEmail = false;
      }
      else if (this.errorCreate.length === 1 && this.errorCreate[0].indexOf("Passwords") > -1) {
        this.checkErrorPhone = true;
        this.checkErrorEmail = false;
      }
    }
  }

  ngOnInit() {
    console.log('in')
    this.model = this.dataModel || {};
    console.log(this.dataModel);
    this.fileImport = this.checkFile || {};
  }
  checkChange(event: boolean) {
    this.checkBeforeUnload = event;
    window.addEventListener('beforeunload', (event) => {
      if (this.checkBeforeUnload === true) {
        event.returnValue = 'You have unfinished changes!';
      }
      else {

      }
    })
  }
  subChange(ev: any){
    this.handleSelectChange.emit({
      type: 'sub-select-data',
      item: this.model,
      value: +ev.target.value
    });
    console.log(this.model);
  }
  selectChange(ev: any) {
    this.handleSelectChange.emit({
      type: 'select-data',
      item: this.model,
      value: +ev.target.value
    });
  }
  selectChip(i: any, id: any) {
    this.data = this.data.map(x=>{
      if(x.id == id){
        x.option[i].selected = !x.option[i].selected
      }
      return x;
    });
    this.handleSelectChange.emit({
      type: 'multiple',
      item: this.model,
      value: this.data.find(x=>x.id == id),
    });
  }
  fileDownload(url: string) {
    document.location.href = url;
  }
  preview(files: any) {
    if (files.length === 0)
      return;

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  onCallBackData = () => { }

  onClickButton = (i: any) => {
    this.checkBeforeUnload = false;
    this.callback.emit({
      item: {},
      file: this.file,
      btn: i
    });
  }
  clickSubmit = (check: boolean, item: any) => {
    if (check === true) {
      this.checkBeforeUnload = false;
      this.callback.emit({
        item: this.model,
        file: this.file,
        btn: item
      });
    }

  }
}


@NgModule({
  declarations: [CreateFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxEditorModule, MatChipsModule,],
  exports: [CreateFormComponent],
})
export class CreateFormModule { }
