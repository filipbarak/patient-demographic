import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private activeTab: string = 'data';

  selectTab(tab: string) {
    this.activeTab=tab;
  }
}
