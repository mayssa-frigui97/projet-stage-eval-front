import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcritereComponent } from './addcritere.component';

describe('AddcritereComponent', () => {
  let component: AddcritereComponent;
  let fixture: ComponentFixture<AddcritereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcritereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
