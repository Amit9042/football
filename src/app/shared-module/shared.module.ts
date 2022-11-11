import { CommonModule, DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialImportModule, PrimengImportModule } from "./modules";
import { GroupByPipe } from "@sharedModule/pipes";

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
  ],

  exports: [
    GroupByPipe,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialImportModule,
    PrimengImportModule,
  ],

  providers: [GroupByPipe, DatePipe],
})
export class SharedModule { }
