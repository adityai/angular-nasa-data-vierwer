import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CuriositySolService } from './curiosity-sol.service';

describe('CuriositySolService', () => {
  let service: CuriositySolService;
  let mockCuriositySolService: jasmine.SpyObj<CuriositySolService>;

  beforeEach(() => {
    mockCuriositySolService = jasmine.createSpyObj(CuriositySolService, ['getLatestMissionUpdateData'])
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        CuriositySolService,
        { provide: CuriositySolService, useValue: mockCuriositySolService }
      ]
    });
    service = TestBed.inject(CuriositySolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return latest curiosity mission data', () => {
    mockCuriositySolService.getLatestMissionUpdateData.and.returnValue(of('{"rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active","max_sol":3116,"max_date":"2021-05-12","total_photos":492865,"cameras":[{"name":"FHAZ","full_name":"Front Hazard Avoidance Camera"},{"name":"NAVCAM","full_name":"Navigation Camera"},{"name":"MAST","full_name":"Mast Camera"},{"name":"CHEMCAM","full_name":"Chemistry and Camera Complex"},{"name":"MAHLI","full_name":"Mars Hand Lens Imager"},{"name":"MARDI","full_name":"Mars Descent Imager"},{"name":"RHAZ","full_name":"Rear Hazard Avoidance Camera"}]}}'));
    let mockMissionDataJson = mockCuriositySolService.getLatestMissionUpdateData();
    let jsonObject = JSON.parse(JSON.stringify(mockMissionDataJson));
    expect(jsonObject).toBeTruthy();
  });
});
