import { Component, EventEmitter, Input, Output, output } from '@angular/core';
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
  @Output() quantityChanged = new EventEmitter();

  Increase(){
    this.product.quantity++;
    this.quantityChanged.emit();
  }

  Decrease(){
    if(this.product.quantity > 1){
      this.product.quantity--;
      this.quantityChanged.emit();
    }
  }
}
