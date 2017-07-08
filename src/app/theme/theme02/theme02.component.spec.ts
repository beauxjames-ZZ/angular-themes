import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme02Component } from './theme02.component';

describe('Theme02Component', () => {
  let component: Theme02Component;
  let fixture: ComponentFixture<Theme02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
