import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEvaluationComponent } from './consulter-evaluation.component';

describe('ConsulterEvaluationComponent', () => {
  let component: ConsulterEvaluationComponent;
  let fixture: ComponentFixture<ConsulterEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
