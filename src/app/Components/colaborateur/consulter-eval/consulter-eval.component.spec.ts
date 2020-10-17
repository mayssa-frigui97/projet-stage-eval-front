import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEvalComponent } from './consulter-eval.component';

describe('ConsulterEvalComponent', () => {
  let component: ConsulterEvalComponent;
  let fixture: ComponentFixture<ConsulterEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
