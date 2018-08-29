import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  public definition = `
  Async Pipe - Subscribes to an Observable or Promise and returns the latest value
  it has emitted. When a new value is emitted, the async pipe marks the component to
  be checked for changes. When the component gets destroyed, the async pipe unsubscribes
  automatically to avoid potential memory leaks.

  The example below uses creates an observable that observes to the NGRX store for change to the sidebar state.
  When the state changes the sidebar will display.
  `;

  public displayCode = `

  public sideNaveOpen$ = this.store.select((state: AppState) => state.layout.sidenavOpen);

  <mat-sidenav-container>
  <mat-sidenav [opened]="sideNaveOpen$ | async">
    <p>
      <button mat-raised-button color="accent" [routerLink]="['profile']">Profile</button>
    </p>
    <p>
      <button mat-raised-button color="accent" [routerLink]="['examples']">Examples</button>
    </p>
    <p>
      <button mat-raised-button color="accent" [routerLink]="['blog']">Blog</button>
    </p>
  </mat-sidenav>
  <mat-sidenav-content>

    <body>
      <section class="container">
        <router-outlet></router-outlet>
      </section>

    </body>

  </mat-sidenav-content>
</mat-sidenav-container>
  `;

  constructor() { }

  ngOnInit() {
  }

}
