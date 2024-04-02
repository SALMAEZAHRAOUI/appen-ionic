import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterlivreursPage } from './ajouterlivreurs.page';

describe('AjouterlivreursPage', () => {
  let component: AjouterlivreursPage;
  let fixture: ComponentFixture<AjouterlivreursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterlivreursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
