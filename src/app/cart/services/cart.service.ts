import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { CartProduct } from '../models/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  _cartProducts = new BehaviorSubject<CartProduct[]>([]);
  public cartProducts = this._cartProducts.asObservable();

  _cartPrice = new BehaviorSubject<number>(0);
  public cartPrice = this._cartPrice.asObservable();

  _isCartOverlayOpen = new BehaviorSubject<boolean>(false);
  public isCartOverlayOpen = this._isCartOverlayOpen.asObservable();

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if(savedCart) {
      this.updateCart(JSON.parse(savedCart));
    }
  }

  updateCartItem(product: Product, amount: number) {
    if(amount <= 0) {
      this.deleteCartItem(product);
      return;
    }
    const newCartItems = this._cartProducts.value;
    let cartItem = newCartItems.find(x => x.product.id === product.id);
    if(cartItem) {
      cartItem.amount = amount;
      this.updateCart(newCartItems);
    }
    else this.updateCart([...this._cartProducts.value, {amount, product}]);
  }

  deleteCartItem(product: Product) {
    const newCartItems = this._cartProducts.value;
    const cartItem = newCartItems.find(x => x.product.id === product.id);
    if(cartItem) {
      newCartItems.splice(newCartItems.indexOf(cartItem), 1);
      this.updateCart(newCartItems);
    }
  }

  private updateCart(cartProducts: CartProduct[]) {
    let amount = 0;
    cartProducts.forEach(cartProduct => amount += cartProduct.amount * cartProduct.product.price);
    this._cartPrice.next(amount);
    this._cartProducts.next(cartProducts);
    localStorage.setItem('cart',JSON.stringify(this._cartProducts.value));

  }

  setIsCartOverlayOpen(value: boolean) {
    this._isCartOverlayOpen.next(value);
  }
}
