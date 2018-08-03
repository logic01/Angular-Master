import { Action } from '@ngrx/store';
import { Account } from '../../models/account';

export const CREATE = 'CREATE';
export const GET = 'GET';
export const UPDATE = 'UPDATE';

const initialState = new Account();

export function accountReducer(state: Account = initialState, action: Action) {
    switch (action.type) {
        case CREATE:
            return new Account();

        case GET:
            return new Account();

        case UPDATE:
            return new Account();

        default:
            return state;
    }
}
