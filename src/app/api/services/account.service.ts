import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = 'http://localhost:3000/account';

  constructor(private http: HttpClient) { }

  post(account: Account) {
    const body = JSON.stringify(account);
    return this.http.post<Account>(this.url, JSON.stringify(body));
  }

  put(account: Account) {
    const body = JSON.stringify(account);
    return this.http.put<Account>(this.url, JSON.stringify(body));
  }

  get() {
    return this.http.get<Account>(this.url);
  }

}
