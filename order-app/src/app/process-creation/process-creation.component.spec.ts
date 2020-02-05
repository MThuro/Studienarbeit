import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCreationComponent } from './process-creation.component';

describe('ProcessCreationComponent', () => {
  let component: ProcessCreationComponent;
  let fixture: ComponentFixture<ProcessCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
