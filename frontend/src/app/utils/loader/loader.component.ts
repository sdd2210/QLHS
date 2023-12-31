import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})

export class LoaderComponent {
    color = 'accent';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = 50;
    isLoading: Subject<boolean>;
    constructor(
        public loadingService: LoaderService
    ) {
        this.isLoading = loadingService.isLoading;
    }
}
@NgModule({
    declarations: [
        LoaderComponent,
    ],
    imports: [
        MatProgressSpinnerModule,
        CommonModule
    ],
    exports: [
        LoaderComponent
    ]
})
export class LoaderModule { }