import { Action } from '@ngrx/store';
import { Account } from './../../models/account';

export enum AccountActionTypes {
    LoadAccount = '[Account] Load',
    CreateAccount = '[Account] Create',
    UpdateAccount = '[Account] Update',
    LoadAccountSuccess = '[Account] Load Success',
    CreateAccountSuccess = '[Account] Create Success',
    UpdateAccountSuccess = '[Account] Update Success'
}

export class LoadAccount implements Action {
    readonly type = AccountActionTypes.LoadAccount;
    constructor() { }
}

export class LoadAccountSuccess implements Action {
    readonly type = AccountActionTypes.LoadAccountSuccess;
    constructor(public payload: Account) { }
}

export class CreateAccount implements Action {
    readonly type = AccountActionTypes.CreateAccount;
}

export class CreateAccountSuccess implements Action {
    readonly type = AccountActionTypes.CreateAccountSuccess;
    constructor(public payload: Account) { }
}

export class UpdateAccount implements Action {
    readonly type = AccountActionTypes.UpdateAccount;
}

export class UpdateAccountSuccess implements Action {
    readonly type = AccountActionTypes.UpdateAccountSuccess;
    constructor(public payload: Account) { }
}

// allows Typescript dot complete access to our actions.
export type AccountActionsUnion =
    LoadAccount
    | LoadAccountSuccess
    | CreateAccount
    | CreateAccountSuccess
    | UpdateAccount
    | UpdateAccountSuccess;
