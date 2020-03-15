import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RanveerComponent } from './ranveer.component';

describe('RanveerComponent', () => {
  let component: RanveerComponent;
  let fixture: ComponentFixture<RanveerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RanveerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RanveerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
