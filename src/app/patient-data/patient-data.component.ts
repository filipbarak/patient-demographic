import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {
  patientDataForm;
  @Input() expanded: boolean = false;
  @Input() defaultVlaues: any = {};

  genders = ['Male', 'Female'];
  martial = ['Married', 'Never Married', 'Domestic Partner', 'Divorced', 'Widowed', 'Unknown'];
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
      martial: ['', Validators.required],
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

    this.patientDataForm.valueChanges.subscribe(() => {
      // this.defaultVlaues = this.patientDataForm.value ? this.defaultVlaues=this.patientDataForm.value : {};
      if (this.patientDataForm.value) {
        this.valuesPDF.next(this.patientDataForm.value)
      }
      this.patientDataForm.valid
        ? this.validPDF.next(true)
        : this.validPDF.next(false);
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

  initPhone() {
    return this.fb.group({
      phone: ['', Validators.required],
    });
  }

  addPhone() {
    // add phone to the list
    const control = <FormArray>this.patientDataForm.controls['phones'];
    control.push(this.initPhone());
  }

  initEmail() {
    return this.fb.group({
      email: ['', Validators.required],
    });
  }

  addEmail() {
    // add email to the list
    const control = <FormArray>this.patientDataForm.controls['emails'];
    control.push(this.initEmail());
  }

  fillExpandedForm() {
    if (this.expanded) {
      this.patientDataForm.setValue({
        "name": "Mary",
        "middleName": "",
        "lastName": "Wilkinson",
        "date": "1-Jul-1976",
        "gender": "1",
        "martial": "5",
        "his": "123456789",
        "addresses": [{"street": "46 Baker Street", "postalCode": "3465", "city": "London", "country": "2"}],
        "phones": [{"phone": 563456017}],
        "emails": [{"email": "wilkinson.marry@gmail.com"}]
      });
    }
  }
}
