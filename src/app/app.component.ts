import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit{
  title = 'angular-test';
  constructor() { }

  ngOnInit() {

  }
}
