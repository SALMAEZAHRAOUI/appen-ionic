import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsclientsPage } from './consclients.page';

describe('ConsclientsPage', () => {
  let component: ConsclientsPage;
  let fixture: ComponentFixture<ConsclientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsclientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
