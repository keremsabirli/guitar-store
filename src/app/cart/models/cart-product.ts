import { Product } from "src/app/shared/models/product";

export interface CartProduct {
  product: Product;
  amount: number;
}
