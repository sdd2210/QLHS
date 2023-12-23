import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
    selector: 'app-base-card',
    templateUrl: './base-card.component.html',
    styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit, OnChanges {
    @Input() check: any;
    @Input() dataCard: any;
    @Input() showIcon: any;
    @Output() callback = new EventEmitter();
    @Output() callbackDelete= new EventEmitter();
    showIconButton = false;
    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
        this.showIconButton = this.showIcon;
        this.dataCard = this.dataCard;
    }
    handleDeleteCallBack(i: any){
        this.callbackDelete.emit(i);
    }
    ngOnInit(): void { 
        this.showIconButton = false;
    }
}

@NgModule({
    declarations: [BaseCardComponent],
    imports: [CommonModule],
    exports: [BaseCardComponent],
})
export class BaseCardModule { }
