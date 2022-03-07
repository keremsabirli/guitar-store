import { TestBed } from '@angular/core/testing';
import { Product } from 'src/app/shared/models/product';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should remove the product when amount is zero', () => {
    const testProduct: Product = {
      id: '9e545bdb-f2b5-4f32-9dc5-b2ae74d6fc9d',
      name: 'test',
      image: 'test',
      price: 1000
    };
    service.updateCartItem(testProduct, 1);
    service.updateCartItem(testProduct, 0);

    expect(service._cartProducts.value.length).toBe(0);

  });
});
