import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { UserOverlayComponent } from '../auth/components/user-overlay/user-overlay.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CartOverlayComponent } from '../cart/components/cart-overlay/cart-overlay.component';
import { CartModule } from '../cart/cart.module';
import { CartItemComponent } from '../cart/components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    UserOverlayComponent,
    CartOverlayComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    RouterModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    RouterModule,
    MatListModule
  ]
})
export class SharedModule { }
