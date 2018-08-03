import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { FormHelperService } from 'master-common';

@Component({
  selector: 'am-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm: FormGroup;
  constructor(private formHelper: FormHelperService) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {

    if (!this.accountForm.valid) {
      this.formHelper.markFormGroupTouched(this.accountForm);
      this.formHelper.setFocusOnError(this.accountForm);
      return;
    }
  }
}
