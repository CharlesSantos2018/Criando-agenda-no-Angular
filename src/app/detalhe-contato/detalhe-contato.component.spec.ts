import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheContatoComponent } from './detalhe-contato.component';

describe('DetalheContatoComponent', () => {
  let component: DetalheContatoComponent;
  let fixture: ComponentFixture<DetalheContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
