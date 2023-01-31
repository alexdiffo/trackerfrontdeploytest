import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFleetComponent } from './newFleet.component';

describe('NewFleetComponent', () => {
  let component: NewFleetComponent;
  let fixture: ComponentFixture<NewFleetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFleetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
