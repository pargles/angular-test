import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Hello world</h1>
  `
})
export class AppComponent implements OnInit{
  title = 'angular-test';
  constructor() { }

  ngOnInit() {

  }
}


// import { Component, OnInit } from '@angular/core';

// @Component({ 
//   selector: 'app-root',
//   template: `
//     <app-customers></app-customers>
//   `
// })
// export class AppComponent implements OnInit {
//   constructor() { }

//   ngOnInit() {

//   }
  
// }
