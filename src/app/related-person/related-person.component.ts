import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-related-person',
  templateUrl: './related-person.component.html',
  styleUrls: ['./related-person.component.scss']
})
export class RelatedPersonComponent implements OnInit {

  patientDataForm;

  relations = ['Parent', 'Partner','Family','Guardian','Friend','Caregiver','Work','Other'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.patientDataForm = this.fb.group({
      name: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      relation: ['', Validators.required],
      addresses: this.fb.array([
        this.initAddress(),
      ]),
      phones: this.fb.array([
        this.initPhone(),
      ]),
      emails: this.fb.array([
        this.initEmail(),
      ]),
    });
  }

  initAddress() {
    // initialize our address
    return this.fb.group({
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  addAddress() {
    // add address to the list
    const control = <FormArray>this.patientDataForm.controls['addresses'];
    control.push(this.initAddress());
  }

  private initPhone() {
    return this.fb.group({
      phone: ['', Validators.required],
    });
  }

  addPhone() {
    // add phone to the list
    const control = <FormArray>this.patientDataForm.controls['phones'];
    control.push(this.initPhone());
  }

  private initEmail() {
    return this.fb.group({
      email: ['', Validators.required],
    });
  }

  addEmail() {
    // add phone to the list
    const control = <FormArray>this.patientDataForm.controls['emails'];
    control.push(this.initEmail());
  }

}
