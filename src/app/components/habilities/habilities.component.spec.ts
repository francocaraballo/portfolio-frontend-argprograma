import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitiesComponent } from './habilities.component';

describe('HabilitiesComponent', () => {
  let component: HabilitiesComponent;
  let fixture: ComponentFixture<HabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
