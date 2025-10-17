import { Component } from '@angular/core';
import { CartService } from '../cart-service';
import { IProduct } from '../iproduct.interface';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
cartItems: IProduct[] = [];
total:number = 0;
service:number = 0;
discount:number = 0;

constructor (private cartService: CartService){
  this.loadCart();
  this.showTotal();
};

loadCart() {
  this.cartItems = this.cartService.getCartItems()
}

  showTotal() {
    this.total = this.cartService.calculateTotal();
  }
}
