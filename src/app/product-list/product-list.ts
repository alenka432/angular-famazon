import { Component } from '@angular/core';
import { IProduct } from '../iproduct.interface';
import { PRODUCTS } from '../products';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
productsArray: IProduct[] = PRODUCTS;

constructor(private cartService: CartService){

}
addToCart(p:IProduct):void{
  this.cartService.addToCart(p)
  alert(`${p.name} has been added to the cart`);
}
}
