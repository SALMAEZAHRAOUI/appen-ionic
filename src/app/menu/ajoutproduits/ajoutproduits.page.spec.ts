import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjoutproduitsPage } from './ajoutproduits.page';

describe('AjoutproduitsPage', () => {
  let component: AjoutproduitsPage;
  let fixture: ComponentFixture<AjoutproduitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjoutproduitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
