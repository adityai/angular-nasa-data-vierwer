import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuriositySolComponent } from './curiosity-sol.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CuriositySolComponent', () => {
  let component: CuriositySolComponent;
  let fixture: ComponentFixture<CuriositySolComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        CuriositySolComponent
      ],
    }).compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
