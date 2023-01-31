import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecperimeterComponent } from './secperimeter.component';

describe('SecperimeterComponent', () => {
  let component: SecperimeterComponent;
  let fixture: ComponentFixture<SecperimeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecperimeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecperimeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
