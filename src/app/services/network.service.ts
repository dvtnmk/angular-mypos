import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { login, register } from '../models/auth.model';
import { ProductResponse, Product } from '../models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) {

  }

  login(data) : Observable<login> {
    return this.httpClient.post<login>('/auth/login',data)
  }

  register(data) : Observable<register> {
    return this.httpClient.post<register>('/auth/register',data)
  }

  getProductAll() : Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>('/product')
  }
  getProductImage(imagePath) : string{
    if(imagePath === null || imagePath ===''){
      return 'assets/images/no_photo.jpg'
    }else{
      return `${environment.baseAPIURL}/product/images/${imagePath}`
    }
  }

  createProduct(data: Product) : Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>('/product',this.makeProductForm(data))
  }

  makeProductForm(data){
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("price",data.price);
    formData.append("stock", data.stock);
    formData.append("image",data.image);
    return formData;
  }

  deleteProduct(id) : Observable<ProductResponse> {
    return this.httpClient.delete<ProductResponse>(`/product/${id}`)
  }

  editProduct(data,id) : Observable<ProductResponse> {
    return this.httpClient.put<ProductResponse>(`/product/${id}`,this.makeProductForm(data))
  }
  getProductById(id :string) : Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(`/product/${id}`)
  }

}
