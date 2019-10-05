import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpatizanteComponent } from './simpatizante.component';

describe('SimpatizanteComponent', () => {
  let component: SimpatizanteComponent;
  let fixture: ComponentFixture<SimpatizanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpatizanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpatizanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
