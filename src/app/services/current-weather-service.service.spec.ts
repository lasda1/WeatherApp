import { TestBed } from '@angular/core/testing';

import { CurrentWeatherServiceService } from './current-weather-service.service';

describe('CurrentWeatherServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentWeatherServiceService = TestBed.get(CurrentWeatherServiceService);
    expect(service).toBeTruthy();
  });
});
