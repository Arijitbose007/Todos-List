import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  constructor(){
    /* setTimeout(() => {
      this.title = "My Todos List";
    }, 2000); */
  }
}
