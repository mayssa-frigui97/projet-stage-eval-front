import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepoleComponent } from './updatepole.component';

describe('UpdatepoleComponent', () => {
  let component: UpdatepoleComponent;
  let fixture: ComponentFixture<UpdatepoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
