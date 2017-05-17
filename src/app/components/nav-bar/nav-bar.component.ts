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
  @Output() formExpanded: EventEmitter<boolean> = new EventEmitter();
  @Output() selectedTab: EventEmitter<string> = new EventEmitter();
  shownExpanded;
  shownNotExpanded;

  constructor() {
  }

  ngOnInit() {
  }

  clickExpanded() {
    //this.expanded = !this.expanded;
    console.log(this.expanded);
    this.selectTab('data');
    this.shownExpanded = !this.shownExpanded;
  }

  clickNotExpanded() {
    //this.expanded = !this.expanded;
    this.formExpanded.next(this.expanded);
    console.log(this.expanded);
    this.selectTab('data');
    this.shownNotExpanded = !this.shownNotExpanded;
  }

  expandFormsActive() {
    this.expanded = !this.expanded;
    this.formExpanded.next(this.expanded);
    this.shownExpanded = !this.shownExpanded;
    this.shownNotExpanded = this.shownExpanded


  }

  expandFormsNotActive() {
    this.expanded = !this.expanded;
    this.formExpanded.next(this.expanded);
    this.shownNotExpanded = !this.shownNotExpanded
    this.shownExpanded = this.shownNotExpanded

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

  checkEnabled(formName, validForms): boolean {
    if (formName == 'person') {
      return !validForms.patientDataForm;
      // console.log(validForms)
    }
    if (formName == 'consent') {
      return !validForms.patientDataForm || !validForms.relatedPersonForm;
    }
  }

}
