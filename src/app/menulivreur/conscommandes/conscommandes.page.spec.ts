import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConscommandesPage } from './conscommandes.page';

describe('ConscommandesPage', () => {
  let component: ConscommandesPage;
  let fixture: ComponentFixture<ConscommandesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConscommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
