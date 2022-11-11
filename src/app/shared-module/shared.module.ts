import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModule, PrimengImportModule } from "./modules";
import { GroupByPipe } from "@sharedModule/pipes";
import { UIModule } from "@uiModule/ui.module";

@NgModule({
  declarations: [
    GroupByPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    PrimengImportModule,
    UIModule,
  ],

  exports: [
    GroupByPipe,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    PrimengImportModule,
    UIModule,
  ],

  providers: [GroupByPipe, DatePipe],
})
export class SharedModule { }
