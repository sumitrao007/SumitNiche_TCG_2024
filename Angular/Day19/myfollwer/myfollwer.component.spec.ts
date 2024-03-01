import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfollwerComponent } from './myfollwer.component';

describe('MyfollwerComponent', () => {
  let component: MyfollwerComponent;
  let fixture: ComponentFixture<MyfollwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfollwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfollwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
