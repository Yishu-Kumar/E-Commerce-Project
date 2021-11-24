import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: NgForm) {
    // console.log(form);
    
    let newProduct = {  
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

    // console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe(data => {

      console.log(data);
    });
  }

}
