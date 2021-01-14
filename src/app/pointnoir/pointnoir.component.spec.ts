import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointnoirComponent } from './pointnoir.component';

describe('PointnoirComponent', () => {
  let component: PointnoirComponent;
  let fixture: ComponentFixture<PointnoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointnoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointnoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
