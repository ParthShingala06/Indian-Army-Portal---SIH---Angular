import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahaveerComponent } from './mahaveer.component';

describe('MahaveerComponent', () => {
  let component: MahaveerComponent;
  let fixture: ComponentFixture<MahaveerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahaveerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahaveerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
