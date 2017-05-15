import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  patientDataForm;

  genders = ['Male', 'Female'];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.patientDataForm = this.fb.group({
      name: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      his: ['', Validators.required],
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
