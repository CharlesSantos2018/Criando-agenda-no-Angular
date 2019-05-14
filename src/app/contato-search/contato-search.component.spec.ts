import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoSearchComponent } from './contato-search.component';

describe('ContatoSearchComponent', () => {
  let component: ContatoSearchComponent;
  let fixture: ComponentFixture<ContatoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
