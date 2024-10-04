import { Component, Input } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!:ProductModel;

  Increase(){
    this.product.quantity++;
  }

  Decrease(){
    this.product.quantity--;
  }
}
