import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-related-person',
  templateUrl: './related-person.component.html',
  styleUrls: ['./related-person.component.scss']
})
export class RelatedPersonComponent implements OnInit {

  relatedPersonForm;
  @Input() expanded: boolean = false;

  relations = ['Parent', 'Partner', 'Family', 'Guardian', 'Friend', 'Caregiver', 'Work', 'Other'];

  @Input() defaultVlaues: any = {};

  @Output() validRPF: EventEmitter<boolean> = new EventEmitter();
  @Output() valuesRPF: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.relatedPersonForm = this.fb.group({
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

    this.relatedPersonForm.patchValue(this.defaultVlaues)

    this.relatedPersonForm.valueChanges.subscribe(() => {
      if (this.relatedPersonForm.value) {
        this.valuesRPF.next(this.relatedPersonForm.value)
      }
      this.relatedPersonForm.valid
        ? this.validRPF.next(true)
        : this.validRPF.next(false);
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
    const control = <FormArray>this.relatedPersonForm.controls['addresses'];
    control.push(this.initAddress());
  }

  private initPhone() {
    return this.fb.group({
      phone: ['', Validators.required],
    });
  }

  addPhone() {
    // add phone to the list
    const control = <FormArray>this.relatedPersonForm.controls['phones'];
    control.push(this.initPhone());
  }

  private initEmail() {
    return this.fb.group({
      email: ['', Validators.required],
    });
  }

  addEmail() {
    // add phone to the list
    const control = <FormArray>this.relatedPersonForm.controls['emails'];
    control.push(this.initEmail());
  }

  fillExpandedForm() {
    if (this.expanded) {
      this.relatedPersonForm.setValue({
        "name": "Elizabeth",
        "middleName": "",
        "lastName": "Conor",
        "relation": "3",
        "addresses": [{"street": "1 Chapel Hill", "postalCode": "123", "city": "London", "country": "2"}],
        "phones": [{"phone": 502458789}],
        "emails": [{"email": "elizabeth.conor@gmail.com"}]
      })
    }
  }

}
