import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  expanded;
  isActive;
  @Input() validForms = {};
  @Output() selectedTab: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.expanded = !this.expanded;
    console.log(this.expanded)
  }

  toggleHighlight(newValue: number) {
    if (this.isActive === newValue) {
      this.isActive = 0;
    }
    else {
      this.isActive = newValue;
    }
  }

  selectTab(tab: string) {
    this.selectedTab.next(tab)
  }

}
