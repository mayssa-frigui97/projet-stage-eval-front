import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpolesComponent } from './listpoles.component';

describe('ListpolesComponent', () => {
  let component: ListpolesComponent;
  let fixture: ComponentFixture<ListpolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
