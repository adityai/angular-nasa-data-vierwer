import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YfiComponent } from './yfi.component';

describe('YfiComponent', () => {
  let component: YfiComponent;
  let fixture: ComponentFixture<YfiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YfiComponent]
    });
    fixture = TestBed.createComponent(YfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
