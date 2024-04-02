import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutercommandesPage } from './ajoutercommandes.page';

describe('AjoutercommandesPage', () => {
  let component: AjoutercommandesPage;
  let fixture: ComponentFixture<AjoutercommandesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutercommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
