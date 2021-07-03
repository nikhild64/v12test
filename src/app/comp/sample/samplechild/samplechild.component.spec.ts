import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplechildComponent } from './samplechild.component';

describe('SamplechildComponent', () => {
  let component: SamplechildComponent;
  let fixture: ComponentFixture<SamplechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplechildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
