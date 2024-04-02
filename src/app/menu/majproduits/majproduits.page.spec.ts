import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MajproduitsPage } from './majproduits.page';

describe('MajproduitsPage', () => {
  let component: MajproduitsPage;
  let fixture: ComponentFixture<MajproduitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MajproduitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
