import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { AppState } from 'store/app-state';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sideNaveOpen$ = this.store.select((state: AppState) => state.layout.sidenavOpen);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
