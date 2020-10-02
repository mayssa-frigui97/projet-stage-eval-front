import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanifEvaluationComponent } from './planif-evaluation.component';

describe('PlanifEvaluationComponent', () => {
  let component: PlanifEvaluationComponent;
  let fixture: ComponentFixture<PlanifEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanifEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanifEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
