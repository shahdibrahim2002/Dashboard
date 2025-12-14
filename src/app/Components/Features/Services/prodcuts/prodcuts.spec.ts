import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prodcuts } from './prodcuts';

describe('Prodcuts', () => {
  let component: Prodcuts;
  let fixture: ComponentFixture<Prodcuts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prodcuts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prodcuts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
