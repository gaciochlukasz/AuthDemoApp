import { Overlay } from '@angular/cdk/overlay';
import { TestBed, async } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HelperService } from './services/helper.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  const initialState = {
    accessToken: '',
    userId: null,
    errorMessage: '',
    logout: false,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        HelperService,
        MatSnackBar,
        Overlay,
        provideMockStore({ initialState }),
        AuthService,
        HttpClient,
        HttpHandler
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
