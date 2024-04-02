import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MajcommandesPage } from './majcommandes.page';

describe('MajcommandesPage', () => {
  let component: MajcommandesPage;
  let fixture: ComponentFixture<MajcommandesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MajcommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
