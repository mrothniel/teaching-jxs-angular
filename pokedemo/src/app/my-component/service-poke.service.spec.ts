import { TestBed } from '@angular/core/testing';

import { ServicePokeService } from './service-poke.service';

describe('ServicePokeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePokeService = TestBed.get(ServicePokeService);
    expect(service).toBeTruthy();
  });
});
