import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContatosComponent } from './top-contatos.component';

describe('TopContatosComponent', () => {
  let component: TopContatosComponent;
  let fixture: ComponentFixture<TopContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
