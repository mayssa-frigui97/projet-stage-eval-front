import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPoleComponent } from './update-user-pole.component';

describe('UpdateUserPoleComponent', () => {
  let component: UpdateUserPoleComponent;
  let fixture: ComponentFixture<UpdateUserPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
