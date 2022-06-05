import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuriositySolComponent } from './curiosity-sol.component';
import { HttpClientModule } from '@angular/common/http';

describe('CuriositySolComponent', () => {
  let component: CuriositySolComponent;
  let fixture: ComponentFixture<CuriositySolComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        CuriositySolComponent
      ],
    }).compileComponents();
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
