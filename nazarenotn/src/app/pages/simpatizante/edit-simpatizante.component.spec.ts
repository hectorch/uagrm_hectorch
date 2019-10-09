import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSimpatizanteComponent } from './edit-simpatizante.component';

describe('EditSimpatizanteComponent', () => {
  let component: EditSimpatizanteComponent;
  let fixture: ComponentFixture<EditSimpatizanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSimpatizanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSimpatizanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
