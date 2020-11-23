import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { routing } from '../mocks/test.mocks';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routing)],
      providers: [AuthService, HttpClient, HttpHandler]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
