import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LivreursPage } from './livreurs.page';

describe('LivreursPage', () => {
  let component: LivreursPage;
  let fixture: ComponentFixture<LivreursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LivreursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
