import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPoleComponent } from './add-user-pole.component';

describe('AddUserPoleComponent', () => {
  let component: AddUserPoleComponent;
  let fixture: ComponentFixture<AddUserPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
