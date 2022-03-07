import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  onAddToCartClicked() {
    this.cartService.updateCartItem(this.product, 1);
  }

}
