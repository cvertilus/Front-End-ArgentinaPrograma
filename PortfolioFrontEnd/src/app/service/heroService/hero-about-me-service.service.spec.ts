import { TestBed } from '@angular/core/testing';

import { HeroAboutMeServiceService } from './hero-about-me-service.service';

describe('HeroAboutMeServiceService', () => {
  let service: HeroAboutMeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroAboutMeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
