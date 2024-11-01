import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPondsComponent } from './user-ponds.component';

describe('UserPondsComponent', () => {
  let component: UserPondsComponent;
  let fixture: ComponentFixture<UserPondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPondsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
