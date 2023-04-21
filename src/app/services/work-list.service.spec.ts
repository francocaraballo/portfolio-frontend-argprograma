import { TestBed } from '@angular/core/testing';

import { WorkListService } from './work-list.service';

describe('WorkListService', () => {
  let service: WorkListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
