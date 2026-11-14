import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro } from './meu-primeiro';

describe('MeuPrimeiro', () => {
  let component: MeuPrimeiro;
  let fixture: ComponentFixture<MeuPrimeiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuPrimeiro],
    }).compileComponents();

    fixture = TestBed.createComponent(MeuPrimeiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
