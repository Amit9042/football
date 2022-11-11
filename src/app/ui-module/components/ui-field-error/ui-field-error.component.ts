import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './ui-field-error.component.html',
  styleUrls: ['./ui-field-error.component.scss']
})
export class UIFieldErrorComponent implements OnInit {

  @Input("control") control: any;
  @Input("fieldName") fieldName: string;

  @Input("erroMsg") erroMsg = '';
  @Input("minLengthCount") minLengthCount: any = '';
  @Input("maxLengthCount") maxLengthCount: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

}
