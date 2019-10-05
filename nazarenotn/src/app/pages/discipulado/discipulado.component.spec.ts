import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipuladoComponent } from './discipulado.component';

describe('DiscipuladoComponent', () => {
  let component: DiscipuladoComponent;
  let fixture: ComponentFixture<DiscipuladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscipuladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscipuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
