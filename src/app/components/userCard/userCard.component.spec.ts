import { ComponentFixture, TestBed } from '@angular/core/testing';

import { userCard } from './userCard.component';

describe('TesteComponent', () => {
  let component: userCard;
  let fixture: ComponentFixture<userCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [userCard]
    })
      .compileComponents();

    fixture = TestBed.createComponent(userCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
