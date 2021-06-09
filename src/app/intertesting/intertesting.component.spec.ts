import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntertestingComponent } from './intertesting.component';

describe('IntertestingComponent', () => {
  let component: IntertestingComponent;
  let fixture: ComponentFixture<IntertestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntertestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntertestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
