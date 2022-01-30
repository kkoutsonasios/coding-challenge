import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render First name', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const inputElement = debugElement.query(By.css('#firstName'));
    expect(inputElement).toBeTruthy();
  });

  it('should render Last name', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const inputElement = debugElement.query(By.css('#lastName'));
    expect(inputElement).toBeTruthy();
  });


  it('should render Address', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const inputElement = debugElement.query(By.css('#address'));
    expect(inputElement).toBeTruthy();
  });

  it('should render Date of birth', () => {
    const debugElement: DebugElement = fixture.debugElement;
    const inputElement = debugElement.query(By.css('#dateOfBirth'));
    expect(inputElement).toBeTruthy();
  });
});
