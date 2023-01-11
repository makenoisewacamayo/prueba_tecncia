import { TestBed } from '@angular/core/testing';
import { GetResultadoService } from './get-resultado.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('GetResultadoService', () => {
  let service: GetResultadoService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [ HttpClientTestingModule],
        providers: [ GetResultadoService]
      }
    );
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GetResultadoService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
