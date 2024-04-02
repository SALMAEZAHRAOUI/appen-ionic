import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenulivreurPage } from './menulivreur.page';

describe('MenulivreurPage', () => {
  let component: MenulivreurPage;
  let fixture: ComponentFixture<MenulivreurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenulivreurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
