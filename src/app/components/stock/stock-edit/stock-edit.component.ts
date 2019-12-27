import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from "src/app/models/product.model";
import { NetworkService } from 'src/app/services/network.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.css']
})
export class StockEditComponent implements OnInit {
  mIsSubmitted = false;

  mProduct: Product = null;
  imageSrc: string | ArrayBuffer = null;
  // Union string + ArrayBuffer + null

  constructor(private location: Location, private networkService: NetworkService
    , private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      params => {//edit/:id
        this.feedData(params.id);
      }
    )
  }

  feedData(id: string) {
    this.networkService.getProductById(id).subscribe(
      data => {
          let product = data.result as Product
          product.image = this.networkService.getProductImage(product.image);
          this.mProduct = product;
      },
      error => {
        alert(JSON.stringify(error))

      }
    )
  }

  ngOnInit() {
  }

  submit() {
    this.networkService.editProduct(this.mProduct, this.mProduct.productId).subscribe(
      data=>{
          alert(data.message);
          this.mIsSubmitted = true;
          this.location.back()
      },
      error =>{
          alert(JSON.stringify(error))
      }
      
    )
  }
  goBack() {
    this.location.back()

  }

  onUploadImage(event) {
    const metaImage = event.target.files[0];
    if (metaImage) {
      const reader = new FileReader();
      reader.readAsDataURL(metaImage);
      reader.onload = () => {
        this.imageSrc = reader.result;
        this.mProduct.image = metaImage;
      };
    }
  }
}
