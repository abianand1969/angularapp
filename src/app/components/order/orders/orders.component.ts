import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  myorder: any = {
    orderid: 1,
    products:{
      productid: 1,
      productname: 'Lenova Laptop'
    }
  }

  constructor() { }  

  ngOnInit(): void {

    console.log(this.myorder)
  }

  deleteOrder(e: any){
    alert('Would you like to delete order')
  }

}
