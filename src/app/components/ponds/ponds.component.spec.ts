import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PondsComponent } from './ponds.component';

describe('PondsComponent', () => {
  let component: PondsComponent;
  let fixture: ComponentFixture<PondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PondsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
