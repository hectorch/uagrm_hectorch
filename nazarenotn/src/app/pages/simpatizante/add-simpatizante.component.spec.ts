import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSimpatizanteComponent } from './add-simpatizante.component';

describe('AddSimpatizanteComponent', () => {
  let component: AddSimpatizanteComponent;
  let fixture: ComponentFixture<AddSimpatizanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSimpatizanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSimpatizanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
