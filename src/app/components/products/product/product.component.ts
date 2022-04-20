import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productIn:any = {}

  currentStyles = {}
  showextended = true
  customClasses = {}
  itemCount = 0

  productid: any;
  categoryid: any;
  filteredProducts: Product[] = []
  // singleproduct!: any;
  singleproduct: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
    promotion: false
  }

  constructor(
    private cartSvc: CartService,
    private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {

    //accessing path params using params property
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.productid = params['id']
    })

    //accessing path params using paramMap
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
    })

    //accessing path params using snapshot
    // this.productid = this.route.snapshot.paramMap.get('id')

    //accessing query params using queryParams
    // this.route.queryParams.subscribe(params => {
    //   console.log(params['category'])
    // })

    //accessing query params using queryParamMap
    this.route.queryParamMap.subscribe(queryParams => {
      console.log(queryParams.get('category'))
    })

     //accessing query params using snapshot
    console.log(this.route.snapshot.queryParamMap.get('category'))

    this.categoryid = this.route.snapshot.queryParamMap.get('category')
   
   this.prodSvc.getProductById(this.productid).subscribe(product => {
     this.singleproduct = product as Product
     console.log(this.singleproduct)
   })

   this.prodSvc.getProductsByCategory(this.categoryid).subscribe(products => {
    this.filteredProducts = products as Product[]
    console.log(this.singleproduct)
  })

  

    this.setCurrentStyles()
    this.setCustomClassess()
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

  setCustomClassess() {
    this.customClasses =  {
      "border-success": this.showextended,
      "border-2": this.showextended,
      "bg-secondary": this.showextended,
      'cursor': 'pointer'
    }   
  }

  updateCount(e: any){
    // alert('Count ' + e)
    this.itemCount = e
  }

  addToCart(product: Product){
    this.cartSvc.add2Cart(product)
  }

 


}
