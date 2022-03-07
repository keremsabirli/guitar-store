import { Component, OnInit } from '@angular/core';
import { MockProducts } from '../shared/mock/mock-products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products = MockProducts;
  constructor() { }

  ngOnInit(): void {
  }

}
