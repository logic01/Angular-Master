import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { CreateAccountAction } from 'actions/account.actions';
import { FormHelperService } from 'master-common';
import { Account } from 'models/account';
import { AppState } from 'store/app-state';

@Component({
  selector: 'am-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public accountForm: FormGroup;

  constructor(
    private formHelper: FormHelperService,
    private store: Store<AppState>) { }

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

    const account = new Account();

    account.username = this.accountForm.get('username').value;
    account.password = this.accountForm.get('password').value;

    this.store.dispatch(new CreateAccountAction(account));
  }
}
