import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcriteresComponent } from './listcriteres.component';

describe('ListcriteresComponent', () => {
  let component: ListcriteresComponent;
  let fixture: ComponentFixture<ListcriteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcriteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
