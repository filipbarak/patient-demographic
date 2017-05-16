import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {

  patientDataForm;
  // defaultVlaues={ "name": "Aleksadandar", "middleName": "", "lastName": "Mileski", "date": "1.1.1990", "gender": "0", "his": "1", "addresses": [ { "street": "pp", "postalCode": "111", "city": "pp", "country": "1" } ], "phones": [ { "phone": 38979000000 } ], "emails": [ { "email": "ace@gmail.com" } ] } ;
  @Input() defaultVlaues: any={};

  genders = ['Male', 'Female'];
  @Output() validPDF: EventEmitter<boolean> = new EventEmitter();
  @Output() valuesPDF: EventEmitter<boolean> = new EventEmitter();

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

    this.patientDataForm.patchValue(this.defaultVlaues)

    this.patientDataForm.valueChanges.subscribe(()=>{
      // this.defaultVlaues = this.patientDataForm.value ? this.defaultVlaues=this.patientDataForm.value : {};
      if(this.patientDataForm.value){this.valuesPDF.next(this.patientDataForm.value)}
      this.patientDataForm.valid
        ? this.validPDF.next(true)
        : this.validPDF.next(false);
    })
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
    // add email to the list
    const control = <FormArray>this.patientDataForm.controls['emails'];
    control.push(this.initEmail());
  }
}
