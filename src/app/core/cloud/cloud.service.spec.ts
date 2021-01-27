import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CloudService } from './cloud.service';

describe('CloudService', () => {
  let service: CloudService;

  /**
   * It is executed before every test case
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CloudService);
  });

  // Test Case 1
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test Case 2
  it('should return valid cloud data', () => {
    const data = service.getCloudData();
    expect(data.data).toBeDefined();
    expect(data.data).toBe('My cloud data');
  });
});
