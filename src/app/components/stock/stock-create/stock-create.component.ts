import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Product } from "src/app/models/product.model";
@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.css']
})
export class StockCreateComponent implements OnInit {
  mProduct = new Product();
  imageSrc: string | ArrayBuffer = null ;
  // Union string + ArrayBuffer + null

  constructor(private location : Location) { }

  ngOnInit() {
  }

  submit(){
    alert(JSON.stringify(this.mProduct))
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
