import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  @Input() status: boolean 
  
  public removeUser() {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user')
    }
  }
}
