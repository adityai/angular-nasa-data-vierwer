import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodComponent } from './apod.component';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApodComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Astrononmy Picture of the Day" as the heading', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector("body > app-root > app-apod > h1")).toContain("Astronomy Picture of the Day");
  });
});
