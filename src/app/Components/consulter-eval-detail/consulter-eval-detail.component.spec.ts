import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEvalDetailComponent } from './consulter-eval-detail.component';

describe('ConsulterEvalDetailComponent', () => {
  let component: ConsulterEvalDetailComponent;
  let fixture: ComponentFixture<ConsulterEvalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterEvalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEvalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
