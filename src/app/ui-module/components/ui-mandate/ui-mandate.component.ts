import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-mandate',
  template: `
  <span class="ui-mandate">*</span>`,
  styles: [
    `
    .ui-mandate {
      color: red;
    }
    `
  ]
})
export class UIMandateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
