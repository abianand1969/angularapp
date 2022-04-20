import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  customClasses = {}
  currentStyles = {}

  mystyle = 'blue'
  products: Product[] = [];

  promoted = false;
  active = true

  showextended = true;

  myorder: any = {
    orderid: 1,
    products:{
      productid: 1,
      productname: 'Lenova Laptop'
    }
  }

  
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {

  //  this.productService.getProducts().subscribe(products => {
  //    console.log(products)
  //    this.products = products as Product[];
  //  })

  //  this.productService.getProductsObservable().subscribe(products => {
  //   console.log(products)
  //   this.products = products as Product[];    
  //  })

  this.productService.getProductsPromise().then(products => {
    console.log(products)
    this.products = JSON.parse(JSON.stringify(products));
  })

    console.log(this.myorder)
    this.setCustomClassess()
    this.setCurrentStyles()
  }

  setCustomClassess() {
    this.customClasses =  {
      "border-success": "product.promotion",
      "border-2": 'product.promotion',
      "bg-light": 'product.promotion'
    }   
  }

  setShowExtended() {
    this.showextended = !this.showextended
    this.setCurrentStyles()
    console.log(this.showextended)
  }

  setCurrentStyles() {
    console.log(this.showextended)
    this.currentStyles = {
      'padding-top': this.showextended ? '0' : '60px',
      'color': this.showextended ? 'red' : 'blue',
      'cursor': 'pointer'
    }
  }



}
