import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapWeatherComponent } from './google-map-weather.component';

describe('GoogleMapWeatherComponent', () => {
  let component: GoogleMapWeatherComponent;
  let fixture: ComponentFixture<GoogleMapWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
