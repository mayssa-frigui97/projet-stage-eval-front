import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvalPoleComponent } from './list-eval-pole.component';

describe('ListEvalPoleComponent', () => {
  let component: ListEvalPoleComponent;
  let fixture: ComponentFixture<ListEvalPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEvalPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEvalPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
