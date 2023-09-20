import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HommePage } from './homme.page';

describe('HommePage', () => {
  let component: HommePage;
  let fixture: ComponentFixture<HommePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HommePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
