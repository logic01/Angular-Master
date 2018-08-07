import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Actions, Effect, ofType } from '@ngrx/effects';

import {
    AccountActionTypes,
    CreateAccountAction,
    CreateAccountErrorAction,
    CreateAccountSuccessAction,
    GetAccountAction,
    GetAccountErrorAction,
    GetAccountSuccessAction,
    UpdateAccountAction,
    UpdateAccountErrorAction,
    UpdateAccountSuccessAction,
} from 'actions/account.actions';
import { AccountService } from 'api/account.service';
import { Account } from 'models/account';

@Injectable()
export class AccountEffects {

    constructor(
        private actions$: Actions,
        private accountService: AccountService
    ) { }

    @Effect()
    getAccount$ = this.actions$.pipe(
        ofType<GetAccountAction>(AccountActionTypes.GetAccount),
        map((action: GetAccountAction) => action.payload),
        switchMap((payload: number) => {
            return this.accountService.get(payload).pipe(
                map((result: Account) => new GetAccountSuccessAction(result)),
                catchError((error: HttpErrorResponse) => of(new GetAccountErrorAction(error)))
            );
        })
    );

    @Effect()
    createAccount$ = this.actions$.pipe(
        ofType<CreateAccountAction>(AccountActionTypes.CreateAccount),
        map(action => action.payload),
        switchMap((account: Account) => {
            return this.accountService.post(account).pipe(
                map((result: Account) => new CreateAccountSuccessAction(result)),
                catchError((error: HttpErrorResponse) => of(new CreateAccountErrorAction(error)))
            );
        })
    );

    @Effect()
    updateAccount$ = this.actions$.pipe(
        ofType<UpdateAccountAction>(AccountActionTypes.UpdateAccount),
        map(action => action.payload),
        switchMap((account: Account) => {
            return this.accountService.put(account).pipe(
                map((result: Account) => new UpdateAccountSuccessAction(result)),
                catchError((error: HttpErrorResponse) => of(new UpdateAccountErrorAction(error)))
            );
        })
    );


}

