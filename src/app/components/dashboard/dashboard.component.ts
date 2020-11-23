import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthActionsType } from 'src/app/state/auth/auth.actions';
import { UserService } from '../../services/user.service';
import { UserActionsType } from './../../state/user/user.actions';
import { first } from 'rxjs/operators';
import { UserModel } from './../../models/user.model';
import { UserState } from './../../state/user/user.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ath-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  user: UserModel;
  authStore$: Subscription;
  userStore$: Subscription;
  
  constructor(public store: Store<any>) { }

  ngOnInit() {
    this.authStore$ = this.store.select('auth').pipe(first()).subscribe( state => {
      this.store.dispatch({type: UserActionsType.USER, id: state.userId})
    });
    this.userStore$ = this.store.select('user').subscribe((user: UserState) => {
      this.user = user.userDetails;
    });
  }

  ngOnDestroy() {
    this.authStore$.unsubscribe();
    this.userStore$.unsubscribe();
  }

  logout() {
    this.store.dispatch({type: AuthActionsType.LOGIN_LOGOUT});
  }

}
