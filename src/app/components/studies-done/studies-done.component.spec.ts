import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesDoneComponent } from './studies-done.component';

describe('StudiesDoneComponent', () => {
  let component: StudiesDoneComponent;
  let fixture: ComponentFixture<StudiesDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
