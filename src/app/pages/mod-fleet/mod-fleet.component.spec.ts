import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModFleetComponent } from './mod-fleet.component';

describe('ModFleetComponent', () => {
  let component: ModFleetComponent;
  let fixture: ComponentFixture<ModFleetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModFleetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModFleetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
