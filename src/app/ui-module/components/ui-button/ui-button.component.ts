import { EventEmitter, Output, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button [disabled]="disabled" (click)="onButtonClick()" class="ui-button {{buttonType}} {{buttonSize}} {{styleClass}}"
    [class.round]="isRounded">
    <!-- <svg-icon class="btn-svg" *ngIf="svgIcon" [name]="svgIcon"></svg-icon> -->
    <span class="btn-text">{{buttonLabel}}</span>  
  </button>
  `,
  styleUrls: ['./ui-button.component.scss'],
})
export class UIButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter();
  @Input() buttonLabel = '';
  @Input() buttonType = ''; // flat
  @Input() svgIcon = '';
  @Input() isRounded = false;
  @Input() disabled = false;
  @Input() buttonSize = 'medium'; // small, medium, large
  @Input() styleClass = ''; // any class


  constructor() { }

  ngOnInit() {
  }


  onButtonClick() {
    this.onClick.emit();
  }
}
