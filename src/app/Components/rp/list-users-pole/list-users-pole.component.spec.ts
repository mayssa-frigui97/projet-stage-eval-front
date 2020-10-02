import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersPoleComponent } from './list-users-pole.component';

describe('ListUsersPoleComponent', () => {
  let component: ListUsersPoleComponent;
  let fixture: ComponentFixture<ListUsersPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
