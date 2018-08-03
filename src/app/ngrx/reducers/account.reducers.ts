import { Account } from './../../models/account';

import {
    AccountActionTypes,
    AccountActionsUnion
} from '../actions/account.actions';

const initialState = new Account();

export function accountReducer(state: Account = initialState, action: AccountActionsUnion) {
    switch (action.type) {

        case AccountActionTypes.LoadAccount:
            return new Account();

        case AccountActionTypes.LoadAccountSuccess:
            return new Account();

        case AccountActionTypes.CreateAccount:
            return new Account();

        case AccountActionTypes.CreateAccountSuccess:
            return new Account();

        case AccountActionTypes.UpdateAccount:
            return new Account();

        case AccountActionTypes.UpdateAccountSuccess:
            return new Account();

        default:
            return state;
    }
}
