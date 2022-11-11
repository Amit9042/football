import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-square-icon',
  template: `<div class="ui-square-icon-container">
<!-- <svg-icon [name]="svgIconName"></svg-icon> -->
  </div>`,
  styleUrls: [`./ui-square-icon.component.scss`]
})
export class UISquareComponent implements OnInit {

  constructor() { }

  @Input() svgIconName: string;
  ngOnInit(): void { }
}
