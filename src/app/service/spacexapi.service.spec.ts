import { TestBed } from '@angular/core/testing';
import {SpacexapiService} from './spacexapi.service'

describe('SpacexapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexapiService = TestBed.get(SpacexapiService);
    expect(service).toBeTruthy();
  });
});