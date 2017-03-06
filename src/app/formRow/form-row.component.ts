import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-row',
  templateUrl: './form-row.component.html'
})
export class FormRowComponent implements OnInit {
  @Input() isRequired: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input() helpValue: string;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
  }

}
