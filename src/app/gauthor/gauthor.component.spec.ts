import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GauthorComponent } from './gauthor.component';

describe('GauthorComponent', () => {
  let component: GauthorComponent;
  let fixture: ComponentFixture<GauthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GauthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
