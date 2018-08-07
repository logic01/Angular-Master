import { HttpErrorResponse } from '@angular/common/http';

import { Action } from '@ngrx/store';

import { Account } from 'models/account';

export enum AccountActionTypes {
    GetAccount = '[Account] Get',
    GetAccountSuccess = '[Account] Get Success',
    GetAccountError = '[Account] Get Error',
    CreateAccount = '[Account] Create',
    CreateAccountSuccess = '[Account] Create Success',
    CreateAccountError = '[Account] Create Error',
    UpdateAccount = '[Account] Update',
    UpdateAccountSuccess = '[Account] Update Success',
    UpdateAccountError = '[Account] Update Error'
}

export class GetAccountAction implements Action {
    readonly type = AccountActionTypes.GetAccount;
    constructor(public payload: number) { }
}

export class GetAccountSuccessAction implements Action {
    readonly type = AccountActionTypes.GetAccountSuccess;
    constructor(public payload: Account) { }
}

export class GetAccountErrorAction implements Action {
    readonly type = AccountActionTypes.GetAccountError;
    constructor(public payload: HttpErrorResponse) { }
}

export class CreateAccountAction implements Action {
    readonly type = AccountActionTypes.CreateAccount;
    constructor(public payload: Account) { }
}

export class CreateAccountSuccessAction implements Action {
    readonly type = AccountActionTypes.CreateAccountSuccess;
    constructor(public payload: Account) { }
}

export class CreateAccountErrorAction implements Action {
    readonly type = AccountActionTypes.CreateAccountError;
    constructor(public payload: HttpErrorResponse) { }
}

export class UpdateAccountAction implements Action {
    readonly type = AccountActionTypes.UpdateAccount;
    constructor(public payload: Account) { }
}

export class UpdateAccountSuccessAction implements Action {
    readonly type = AccountActionTypes.UpdateAccountSuccess;
    constructor(public payload: Account) { }
}

export class UpdateAccountErrorAction implements Action {
    readonly type = AccountActionTypes.UpdateAccountError;
    constructor(public payload: HttpErrorResponse) { }
}


// allows Typescript dot complete access to our actions.
export type AccountActionsUnion =
    GetAccountAction
    | GetAccountSuccessAction
    | GetAccountErrorAction
    | CreateAccountAction
    | CreateAccountSuccessAction
    | CreateAccountErrorAction
    | UpdateAccountAction
    | UpdateAccountSuccessAction
    | UpdateAccountErrorAction;
