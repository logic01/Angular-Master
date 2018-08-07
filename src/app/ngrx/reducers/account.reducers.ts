import { AccountActionsUnion, AccountActionTypes } from 'actions/account.actions';
import { Account } from 'models/account';

const initialState = new Account();

export function accountReducer(state: Account = initialState, action: AccountActionsUnion) {
    switch (action.type) {

        case AccountActionTypes.GetAccountSuccess:
        case AccountActionTypes.GetAccountError:
        case AccountActionTypes.CreateAccountSuccess:
        case AccountActionTypes.CreateAccountError:
        case AccountActionTypes.UpdateAccountSuccess:
        case AccountActionTypes.UpdateAccountError:
            return action.payload;

        default:
            return state;
    }
}
