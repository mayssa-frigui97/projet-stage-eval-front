import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecritereComponent } from './updatecritere.component';

describe('UpdatecritereComponent', () => {
  let component: UpdatecritereComponent;
  let fixture: ComponentFixture<UpdatecritereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecritereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
