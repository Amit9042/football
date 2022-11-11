import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-tag',
  template: `
    <span class="ui-tag {{tagClass}}">
      {{tagText || ''}}
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./ui-tag.component.scss']
})
export class UITagComponent implements OnInit {

  @Input() tagText = '';
  @Input() tagClass = ''; // bg-dark-blue, bg-gray

  constructor() { }

  ngOnInit(): void {
  }

}
