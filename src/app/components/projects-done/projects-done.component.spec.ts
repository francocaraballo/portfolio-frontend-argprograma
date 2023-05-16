import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDoneComponent } from './projects-done.component';

describe('ProjectsDoneComponent', () => {
  let component: ProjectsDoneComponent;
  let fixture: ComponentFixture<ProjectsDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
