import { Injectable } from '@angular/core';
import { Cart } from '../components/products/models/cart';
import { CartItem } from '../components/products/models/cartItem';
import { Product } from '../components/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = []

  constructor() { }

  add2Cart(product: Product){

    this.cart.push(product)

    console.log(this.cart)

  }

  getCart(){
    return this.cart;
  }

  removeItemFromCart(){

  }

  emptyCart(){

  }
}
