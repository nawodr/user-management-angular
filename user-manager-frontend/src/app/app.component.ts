import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-manager';
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
