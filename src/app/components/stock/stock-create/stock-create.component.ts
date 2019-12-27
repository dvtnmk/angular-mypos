import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from "src/app/models/product.model";
import { NetworkService } from 'src/app/services/network.service';
@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  mIsSubmitted = false;
  mProduct = new Product();
  imageSrc: string | ArrayBuffer = null ;
  // Union string + ArrayBuffer + null

  constructor(private location : Location, private networkService : NetworkService) { }

  ngOnInit() {
  }

  submit(){
    this.networkService.createProduct(this.mProduct).subscribe(
      data=>{
        alert(JSON.stringify(data.message))
        this.mIsSubmitted = true
        this.goBack()
      },
      error=>{
        alert(JSON.stringify(error));
      }
    )
  }
  goBack(){
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
