import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositySolComponent } from './curiosity-sol.component';

describe('CuriositySolComponent', () => {
  let component: CuriositySolComponent;
  let fixture: ComponentFixture<CuriositySolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriositySolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriositySolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
