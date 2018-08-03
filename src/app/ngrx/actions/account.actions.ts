import { Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class AccountActions {
    static CREATE_ACCOUNT = 'CREATE_ACCOUNT';
    createAccount(filter): Action {

    }
}
