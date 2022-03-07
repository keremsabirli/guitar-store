import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { BaseComponent } from 'src/app/core/base/base.component';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-overlay',
  templateUrl: './user-overlay.component.html',
  styleUrls: ['./user-overlay.component.scss']
})
export class UserOverlayComponent extends BaseComponent {
  isAuthenticated: boolean = false;
  user?: User;


  constructor(
    private authService: AuthService
  ) {
    super();
  }

  override onInit(): void {
    this.subcriptions.push(
      this.authService.isAuthenticated.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated)
    )
    this.subcriptions.push(
      this.authService.user.subscribe(user => this.user = user)
    )
  }

  onSignoutClicked() {
    this.authService.signout();
  }
}
