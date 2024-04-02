import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModcommandePage } from './modcommande.page';

describe('ModcommandePage', () => {
  let component: ModcommandePage;
  let fixture: ComponentFixture<ModcommandePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModcommandePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
