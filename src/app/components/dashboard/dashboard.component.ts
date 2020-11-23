import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthActionsType } from 'src/app/state/auth/auth.actions';
import { UserService } from '../../services/user.service';
import { UserActionsType } from './../../state/user/user.actions';
import { AuthService } from 'src/app/services/auth.service';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'ath-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<any>, private authService: AuthService) { }

  ngOnInit() {
    this.store.select('auth').pipe(first()).subscribe( state => {
      this.store.dispatch({type: UserActionsType.USER, id: state.userId})
    })
  }

  logout() {
    this.store.dispatch({type: AuthActionsType.LOGIN_LOGOUT});
  }

}
