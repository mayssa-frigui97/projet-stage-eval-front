import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemplirEvalComponent } from './remplir-eval.component';

describe('RemplirEvalComponent', () => {
  let component: RemplirEvalComponent;
  let fixture: ComponentFixture<RemplirEvalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemplirEvalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemplirEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
