import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme03Component } from './theme03.component';

describe('Theme03Component', () => {
  let component: Theme03Component;
  let fixture: ComponentFixture<Theme03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
