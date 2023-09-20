import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListApiPage } from './list-api.page';

describe('ListApiPage', () => {
  let component: ListApiPage;
  let fixture: ComponentFixture<ListApiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
