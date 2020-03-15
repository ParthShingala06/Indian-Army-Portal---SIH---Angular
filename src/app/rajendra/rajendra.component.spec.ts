import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajendraComponent } from './rajendra.component';

describe('RajendraComponent', () => {
  let component: RajendraComponent;
  let fixture: ComponentFixture<RajendraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajendraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajendraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
