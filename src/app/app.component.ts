import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private activeTab: string = 'data';

  defaultValuesPDF = {};
  defaultValuesRPF = {};

  private validForms = { patientDataForm: false, relatedPersonForm:false, consent:false };

  selectTab(tab: string) {
    this.activeTab=tab;
  }
  setNextActiveTab(){
    this.activeTab == 'data'
      ? this.activeTab= 'person'
      : this.activeTab= 'consent';
  }
  setBackActiveTab(){
    this.activeTab == 'person'
      ? this.activeTab = 'data'
      : this.activeTab = 'person';
  }
  setValidityPDF(validValue){
      this.validForms.patientDataForm = validValue;
  }
  setDefaultValuesPDF(defValues){
    this.defaultValuesPDF=defValues;
  }
  setValidityRPF(validValue){
      this.validForms.relatedPersonForm = validValue;
  }
  setDefaultValuesRPF(defValues){
    this.defaultValuesRPF=defValues;
  }
}
