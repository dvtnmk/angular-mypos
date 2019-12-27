import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  mProductArray = new Array<Product>();
  mOrderArray = new Array<Product>();
  mTotalPrice = 0;
  mIsPaymentShow = false;

  constructor(private networkService: NetworkService) { }

  ngOnInit() {
    this.feedData();
  }

  feedData() {
    this.networkService.getProductAll().subscribe(
      data => {
        const products = data.result as Product[];
        this.mProductArray = products.map(
          item =>{
            item.image = this.networkService.getProductImage(item.image)
            return item
          }
        )
      },
      error =>{
        alert(JSON.stringify(error))
      }
    )
  }

  // Products item Begin
  onClickAddOrder(item: Product, isDecrease: Boolean) {
    if(this.mOrderArray.indexOf(item) !== -1){
      //found
      if(isDecrease ){
        //--
        if(item.qty > 1)
          item.qty--
      }else{
        //++
        item.qty++
      }
    }else{
      //not found
      item.qty = 1;
      this.mOrderArray.unshift(item)
    }

    this.countSumPrice();
  }

  countSumPrice() {
    this.mTotalPrice = 0;
    this.mOrderArray.forEach(
      item=>{
        this.mTotalPrice += (item.qty * item.price)
      }
    )
  }

  isSelectedItem(item: Product) {
    return this.mOrderArray.indexOf(item) !== -1
  }
  // Products item End

  // Orders Begin
  onClickRemoveOrder(item: Product) {
    const index =this.mOrderArray.indexOf(item)
    this.mOrderArray.splice(index,1)
    this.countSumPrice();
  }

  onClickPayment() {
    if(this.mTotalPrice >0){
      this.mIsPaymentShow = !this.mIsPaymentShow
    }else{
      alert('order is empty')
    }

  }

  onPaymentCompleted() {
    this.mProductArray = new Array<Product>();
    this.mOrderArray = new Array<Product>();
    this.mTotalPrice =0;
    this.mIsPaymentShow = false;
    this.feedData();
  }
  // Orders End

}
