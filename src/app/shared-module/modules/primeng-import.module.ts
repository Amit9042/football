import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
@NgModule({
    imports: [
        CommonModule,
        RadioButtonModule,
        CheckboxModule,
        TableModule
    ],
    declarations: [],
    providers: [],
    exports: [
        RadioButtonModule,
        CheckboxModule,
        TableModule,
    ]
})
export class PrimengImportModule { }