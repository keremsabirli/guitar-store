import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { ShopComponent } from './shop.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ShopComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ShopModule { }
