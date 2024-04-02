import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MajfournisseursPage } from './majfournisseurs.page';

describe('MajfournisseursPage', () => {
  let component: MajfournisseursPage;
  let fixture: ComponentFixture<MajfournisseursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MajfournisseursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
