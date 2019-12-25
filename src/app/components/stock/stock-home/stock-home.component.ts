import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";
import { Router } from '@angular/router';
import Swal from "sweetalert2";
@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.css']
})
export class StockHomeComponent implements OnInit {
  mProductArray: String[] = [];

  mSearchText = new Subject<string>();
  constructor(private router : Router) { }

  ngOnInit() {
    this.mSearchText.pipe(
      debounceTime(1000)
    ).subscribe(
      word =>{
        this.searchProduct(word)
      }
    )
    this.feedData()
  }

  feedData(){
    this.mProductArray = ['aa','bb','cc']
  }
  checkOutOfStock(): number{
    return 123;
  }
  searchProduct(word : string){
    console.log(word)
  }
  editProduct(id : number){
    this.router.navigate([`/stock/edit/${id}`])
  }
  deleteProduct(id : number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          `Deleted!${id}`,
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
