import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../iproduct.interface';
import { PRODUCTS } from '../../products';
import { CartService } from '../../cart-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit{
product: IProduct | undefined;

constructor(private route: ActivatedRoute, private cartService: CartService){
}
ngOnInit(): void {
  let productId = Number(this.route.snapshot.params[`id`]);
  this.product = PRODUCTS.find((p) => p.id === productId);
}

addToCart(product: IProduct): void {
  this.cartService.addToCart(product)
  alert(`${product.name} - has been added to the cart`);
}
}
