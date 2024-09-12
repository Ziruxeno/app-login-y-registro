import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignubPage } from './signub.page';

describe('SignubPage', () => {
  let component: SignubPage;
  let fixture: ComponentFixture<SignubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
