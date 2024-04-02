import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MajlivreursPage } from './majlivreurs.page';

describe('MajlivreursPage', () => {
  let component: MajlivreursPage;
  let fixture: ComponentFixture<MajlivreursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MajlivreursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
