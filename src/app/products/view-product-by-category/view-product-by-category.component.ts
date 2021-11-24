import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  categoryId !: number;
  products !: Product[];

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe(data => {

      this.categoryId = data.category;
      // console.log(this.categoryId);

      this.productService.viewProductsByCategory(this.categoryId).subscribe(categoryData => {

        this.products = categoryData;
      });
    });
  }

}
