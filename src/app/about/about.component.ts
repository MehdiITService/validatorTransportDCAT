import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-about',
  template: `<br>
  <div onclick= "myFunction(event)" >
    <p>Click on a paragraph. An alert box will alert the element that triggered the event.</p>
  </div>
   `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    constructor() { }

  ngOnInit() {
  }

}
