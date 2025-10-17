import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Aboutus } from './aboutus/aboutus';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-list/product-details/product-details';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "aboutus", component: Aboutus},
    {path: "product-list", component: ProductList},
    {path: "cart", component: Cart},
    {path: "details/:id", component: ProductDetails},
];
