import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  product!: Product;

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(data => {

      this.productId = data.id;

      this.productService.viewProductById(this.productId).subscribe(productDetails => {

        this.product = productDetails; //Get existing data of product.

        console.log(this.product);
      });
    });

  }

  updateProduct(form: NgForm) {

    const updateProduct = {
      id: 0,
      name: form.value.name,
      categoryId: form.value.categoryId,
      price: form.value.price,
      description: form.value.description,
      productImg: form.value.productImg,
      isAvailable: form.value.isAvailable,
      review: form.value.review,
      rating: form.value.rating,
      vendorName: form.value.vendorName,
      warranty: form.value.warranty
    };

    this.productService.updateProduct(this.productId, updateProduct).subscribe(data => {

      console.log(data);
    });
  }
}

