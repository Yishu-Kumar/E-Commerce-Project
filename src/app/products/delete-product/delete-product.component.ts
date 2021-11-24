import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  productId = 0;
  product !: Product;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(data => {

      this.productId = data.id; //Capture the id of product which we want to delete.

      this.productService.viewProductById(this.productId).subscribe(productDetails => {

        this.product = productDetails;
      });

      this.productService.deleteProduct(this.productId).subscribe(data => {

        console.log("Product has been deleted!!"); //Delete the data of selected id product.
      });
    });
  }

}
