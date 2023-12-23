import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, NgModule, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import * as XLSX from 'xlsx';
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() tableData: any;
    @Input() listActive?: any;
    @Input() btnTableHandel?: any;
    @Input() listFilter?: any;
    @Output() callback = new EventEmitter<any>();
    @ViewChild('file')
    clickFile!: ElementRef;
    @ViewChild('fileUpload')
    uploadDoc!: ElementRef;
    @ViewChild('menu')
    menu!: ElementRef;
    totalPage!: number;
    currentPage: number = 1;
    dataSub = [];
    pageSive = 25;
    file!: File;
    arrayBuffer: any;
    showDeleteAll = false;
    showCheckAll = false;
    dataImport!: any[];
    constructor() { }
    listPrivilege: any = [];
    checkPrivilege: any;
    checkEdit: any;
    ngOnChanges() {
        console.log(this.tableData)
        this.showDeleteAll = false;
        this.showCheckAll = false;
        this.data.map((x:any) => x.check = false);
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.dataSub = this.data.filter((x : any, ix:number) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
        this.currentPage = 1;
        this.onLoadDatePagitor();
    }
    changeNumberItem(value : any) {
        this.pageSive = +value;
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.dataSub = this.data.filter((x: any, ix: any) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
        this.currentPage = 1;
        this.onLoadDatePagitor();
    }
    selectAll(ev: any) {
        this.data.forEach((x: any) => {
            x.check = ev
        });
        this.showDeleteAll = ev;
        this.showCheckAll = ev;
    }

    selectItem(item: any, ev: any) {
        item.check = ev;
        this.data.forEach((x: any) => {
            const check = this.data.find((x: any) => x.check === true);
            if (check) {
                this.showDeleteAll = true;
            }
            else {
                this.showDeleteAll = false;
            }
        });
    }
    clickDeleteAll() {
        this.callback.emit({
            type: "delete-all",
            item: this.data.filter((x: any) => x.check === true)
        })
    }
    incomingfile(event: any) {
        let fileReader = new FileReader();
        this.file = event.target.files[0];
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            this.dataImport = XLSX.utils.sheet_to_json(worksheet, { raw: true });
            console.log(this.dataImport);

        }
        fileReader.readAsArrayBuffer(this.file);
    }

    ngOnInit() {
        this.listPrivilege = JSON.parse(localStorage.getItem('privilege_list')??'{}');
        console.log(this.listPrivilege);
        let check = this.listPrivilege.find((x: any) => x.method === "POST" && x.url === 'api/student' || x.method === "POST" && x.url === 'api/annoucement'
            || x.method === "POST" && x.url === 'api/news' || x.method === "POST" && x.url === 'api/homework' || x.method === "POST" && x.url ==="api/userprofile"
        );
        console.log(check);
        if (check) {
            return this.checkPrivilege = true;
        }
        else {
            this.checkPrivilege = false;
        }
        let checkedit = this.listPrivilege.find((x: any) => x.method === 'PUT' && x.url === 'api/student' || x.method === "PUT" && x.url === 'api/annoucement'
            || x.method === "PUT" && x.url === 'api/news' ||x.method === "PUT" && x.url === 'api/homework' || x.method === "PUT" && x.url ==="api/userprofile");
        if (checkedit) {
            return this.checkPrivilege = true;
        }
        else {
            this.checkPrivilege = false;
        }
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.onLoadDatePagitor();
        return;
    }

    nextPage = () => {
        if (this.currentPage + 1 > this.totalPage) return;
        this.currentPage += 1;
        this.onLoadDatePagitor();
    }

    backPage = () => {
        if (this.currentPage - 1 === 0) return;
        this.currentPage -= 1;
        this.onLoadDatePagitor();
    }

    onLoadDatePagitor = () => {
        this.dataSub = this.data.filter((x: any, ix:any) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
    }

    onClickSetting = (item: any, type: any) => {
        this.callback.emit({
            item: item,
            type: type
        })
    }

    onClickBtnActive = (i: any) => {
        if (i.type === 'upload-file') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i.type === 'create') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i.type === 'upload') {
            this.clickFile.nativeElement.click();
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i.type === 'uploadFile') {
            this.uploadDoc.nativeElement.click();
        }
        if (i.type === 'noti') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
        if (i === 'create') {
            this.callback.emit({
                type: i
            })
        }
        if (i === 'uploadDoc') {
            this.callback.emit({
                type: i
            })
        }
        if (i.type === 'result') {
            this.callback.emit({
                type: i.type
            })
        }
    }
    chooseFile(event: any) {
        this.callback.emit(event)

    }

    handleRouteLink = (item: any) => {
        this.callback.emit({
            type: 'route',
            item: item
        })
    }
}

@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        CommonModule,
        MatMenuModule
    ],
    exports: [
        TableComponent
    ]
})
export class TableBaseModule { }