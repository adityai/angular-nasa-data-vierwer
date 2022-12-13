import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerseverancePhotosComponent } from './perseverance-photos.component';

describe('PerseverancePhotosComponent', () => {
  let component: PerseverancePhotosComponent;
  let fixture: ComponentFixture<PerseverancePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerseverancePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerseverancePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
