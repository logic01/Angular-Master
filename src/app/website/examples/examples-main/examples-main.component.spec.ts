import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesMainComponent } from './examples-main.component';

describe('ExamplesMainComponent', () => {
  let component: ExamplesMainComponent;
  let fixture: ComponentFixture<ExamplesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
