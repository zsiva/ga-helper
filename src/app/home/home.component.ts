import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  generatedURL: string;
  formVisible: boolean = false;
  newItems: any[] = [];

  constructor() {
  }

  ngOnInit() {

  }

  toggleForm(): void {
    this.formVisible =! this.formVisible;
  }

  addRow(form: any): void {
    this.newItems.push(form.parameter);
    this.toggleForm();
  }

  submitForm(values: any): void {
    this.generatedURL = JSON.stringify(values).replace(/[`'"\{\}/]/gi, '').replace(/:/gi, '=').replace(/,/gi, '&');
    window.scrollTo(0, 0);
  }


}
