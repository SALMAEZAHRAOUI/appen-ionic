import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterclientsPage } from './ajouterclients.page';

describe('AjouterclientsPage', () => {
  let component: AjouterclientsPage;
  let fixture: ComponentFixture<AjouterclientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterclientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
