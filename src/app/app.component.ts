import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, NgZone, Output, ViewChild} from '@angular/core';
import {PatientDataComponent} from "./patient-data/patient-data.component";
import {RelatedPersonComponent} from "./related-person/related-person.component";
import {expand} from "rxjs/operator/expand";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private activeTab: string = 'data';

  defaultValuesPDF = {};
  defaultValuesRPF = {};
  expanded = false;

  // defaultVlauesPDF={ "name": "Mary", "middleName": "", "lastName": "Wilkinson", "date": "1-Jul-1976", "gender": "1", "his": "123456789", "addresses": [ { "street": "46 Baker Street", "postalCode": "3465", "city": "London", "country": "2" } ], "phones": [ { "phone": 563456017 } ], "emails": [ { "email": "wilkinson.marry@gmail.com" } ] };
  // defaultValuesRPF = { "name": "Elizabeth", "middleName": "", "lastName": "Conor", "relation": "3", "addresses": [ { "street": "1 Chapel Hill", "postalCode": "123", "city": "London", "country": "2" } ], "phones": [ { "phone": 502458789 } ], "emails": [ { "email": "alizabeth.conor@gmail.com" } ] };

  private validForms = {patientDataForm: false, relatedPersonForm: false, consent: false};

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {

  };

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  toggleExpanded(expUpdate) {
    this.expanded = expUpdate;
    this.defaultValuesPDF = {};
    this.defaultValuesRPF = {};
    if (this.expanded == false) {
      this.validForms = {patientDataForm: false, relatedPersonForm: false, consent: false};
    }
  }

  setNextActiveTab() {
    this.activeTab == 'data'
      ? this.activeTab = 'person'
      : this.activeTab = 'consent';
  }

  setBackActiveTab() {
    this.activeTab == 'person'
      ? this.activeTab = 'data'
      : this.activeTab = 'person';
  }

  setValidityPDF(validValue) {

    this.validForms.patientDataForm = validValue;
  }

  setDefaultValuesPDF(defValues) {
    if (this.expanded) {
      this.defaultValuesPDF = {};
    }
    this.defaultValuesPDF = defValues;
  }

  setValidityRPF(validValue) {
    this.validForms.relatedPersonForm = validValue;
  }

  setDefaultValuesRPF(defValues) {
    this.defaultValuesRPF = defValues;
  }
}
