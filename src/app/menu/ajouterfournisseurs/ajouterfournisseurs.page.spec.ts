import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterfournisseursPage } from './ajouterfournisseurs.page';

describe('AjouterfournisseursPage', () => {
  let component: AjouterfournisseursPage;
  let fixture: ComponentFixture<AjouterfournisseursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterfournisseursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
