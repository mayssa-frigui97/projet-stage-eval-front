import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborateurComponent } from './colaborateur.component';

describe('ColaborateurComponent', () => {
  let component: ColaborateurComponent;
  let fixture: ComponentFixture<ColaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
