import { TestBed } from '@angular/core/testing';

import { SaveLocalDataService } from './save-local-data.service';

describe('SaveLocalDataService', () => {
  let service: SaveLocalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveLocalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
