import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartProduct } from '../../models/cart-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartProduct!: CartProduct;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  onDeleteClicked() {
    this.cartService.deleteCartItem(this.cartProduct.product);
  }

  onRemoveItemClicked() {
    this.cartService.updateCartItem(this.cartProduct.product, this.cartProduct.amount - 1);
  }

  onAddItemClicked() {
    this.cartService.updateCartItem(this.cartProduct.product, this.cartProduct.amount + 1);
  }

  get totalPrice() {
    return this.cartProduct.amount * this.cartProduct.product.price;
  }

}
