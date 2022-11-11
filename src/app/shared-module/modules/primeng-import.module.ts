import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
@NgModule({
    imports: [
        CommonModule,
        RadioButtonModule,
        CheckboxModule,
    ],
    declarations: [],
    providers: [],
    exports: [
        RadioButtonModule,
        CheckboxModule,
    ]
})
export class PrimengImportModule { }