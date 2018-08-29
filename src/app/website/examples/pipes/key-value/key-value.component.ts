import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.css']
})
export class KeyValueComponent implements OnInit {

  public definition = `
Key Value Pipe -  allows us to iterate through objects, maps, and arrays.
`;

  public displayCode = `

  keyvalue: { [key: number]: string } =
  {
    1: 'Object Value 1',
    2: 'Object Value 2',
    3: 'Object Value 3'
  };

<div *ngFor="let item of formsDef | keyvalue">
  <button mat-raised-button type="submit" color="accent" (click)="changeView(item.key)>{{item.value}}</button>;
</div>
`;

  constructor() { }

  ngOnInit() {
  }

}
