import { TestBed } from '@angular/core/testing';
import { PostEncuestaService } from './post-encuesta.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('PostEncuestaService', () => {
  let service: PostEncuestaService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [ HttpClientTestingModule],
        providers: [ PostEncuestaService]
      }
    );
    // We inject our service (which imports the HttpClient) and the Test Controller
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PostEncuestaService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
