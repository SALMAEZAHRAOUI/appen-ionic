import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MajclientsPage } from './majclients.page';

describe('MajclientsPage', () => {
  let component: MajclientsPage;
  let fixture: ComponentFixture<MajclientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MajclientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
