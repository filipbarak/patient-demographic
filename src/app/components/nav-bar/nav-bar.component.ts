import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isActive;
  expanded = false;
  @Input() validForms = {};
  @Output() formExpanded:EventEmitter<boolean> = new EventEmitter();
  @Output() selectedTab: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    this.expanded = !this.expanded;
    this.formExpanded.next(this.expanded);
    console.log(this.expanded);
    this.selectTab('data');
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

  checkEnabled(formName,validForms):boolean{
    if(formName=='person'){
      return !validForms.patientDataForm ;
      // console.log(validForms)
    }
    if(formName=='consent'){
      return !validForms.patientDataForm || !validForms.relatedPersonForm;
    }
  }

}
