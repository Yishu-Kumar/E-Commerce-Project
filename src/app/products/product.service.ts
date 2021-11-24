import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import { Product } from './product';
import { baseUrl } from './baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<Product> {

    return this.httpClient.post<Product>(`${baseUrl}/product`, product);
  }

  viewProducts(): Observable<Product[]> {

    return this.httpClient.get<Product[]>(`${baseUrl}/products`);
  }

  updateProduct(productId: number, product: Product): Observable<Product> {

    return this.httpClient.put<Product>(`${baseUrl}/update-product`, product);
  }

  deleteProduct(productId: number): Observable<Product> {

    return this.httpClient.delete<Product>(`${baseUrl}/delete-product/` + productId);
  }

  viewProductById(id: number): Observable<Product> {

    return this.httpClient.get<Product>(`${baseUrl}/product/` + id); 
  }

  viewProductByName(name: string): Observable<Product> {

    return this.httpClient.get<Product>(`${baseUrl}/product-by-name/` + name); 
  }

  viewProductsByCategory(categoryId: number): Observable<Product[]> {

    return this.httpClient.get<Product[]>(`${baseUrl}/products-by-category/` + categoryId); 
  }

  viewProductByDate(dateParam: string): Observable<Product> {

    return this.httpClient.get<Product>(`${baseUrl}/product`);
  }

  getCategories() {

    return this.httpClient.get<Category[]>(`${baseUrl}/categories`);
  }
}

