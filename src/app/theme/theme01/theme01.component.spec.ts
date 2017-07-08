import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Theme01Component } from './theme01.component';

describe('Theme01Component', () => {
  let component: Theme01Component;
  let fixture: ComponentFixture<Theme01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Theme01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Theme01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
