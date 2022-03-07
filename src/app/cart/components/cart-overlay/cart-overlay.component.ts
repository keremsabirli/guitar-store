import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base.component';
import { CartProduct } from '../../models/cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.scss']
})
export class CartOverlayComponent extends BaseComponent {
  cartProducts: CartProduct[] = [];
  cartPrice: number = 0;
  constructor(
    private cartService: CartService
  ) {
    super();
  }

  override onInit(): void {
    this.subcriptions.push(
      this.cartService.cartProducts.subscribe(cardProducts => this.cartProducts = cardProducts)
    );
    this.subcriptions.push(
      this.cartService.cartPrice.subscribe(cartPrice => this.cartPrice = cartPrice)
    );
  }

  get isCartEmpty() {
    return this.cartProducts.length === 0;
  }

}
