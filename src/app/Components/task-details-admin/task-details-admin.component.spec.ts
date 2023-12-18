import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailsAdminComponent } from './task-details-admin.component';

describe('TaskDetailsAdminComponent', () => {
  let component: TaskDetailsAdminComponent;
  let fixture: ComponentFixture<TaskDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDetailsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
