import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wedgets } from './wedgets';

describe('Wedgets', () => {
  let component: Wedgets;
  let fixture: ComponentFixture<Wedgets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wedgets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wedgets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
