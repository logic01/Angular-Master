import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { CloseSidenav, OpenSidenav } from 'actions/layout.actions';
import { AppState } from 'store/app-state';

@Component({
  selector: 'am-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  public sideNaveShow = false;
  constructor(private store: Store<AppState>) { }

  public toggleSideNav() {

    this.sideNaveShow = !this.sideNaveShow;
    if (this.sideNaveShow) {
      this.store.dispatch(new OpenSidenav());
    } else {
      this.store.dispatch(new CloseSidenav());
    }

  }
}
