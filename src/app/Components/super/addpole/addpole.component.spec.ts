import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoleComponent } from './addpole.component';

describe('AddpoleComponent', () => {
  let component: AddpoleComponent;
  let fixture: ComponentFixture<AddpoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
