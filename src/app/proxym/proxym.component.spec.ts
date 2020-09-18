import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxymComponent } from './proxym.component';

describe('ProxymComponent', () => {
  let component: ProxymComponent;
  let fixture: ComponentFixture<ProxymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
