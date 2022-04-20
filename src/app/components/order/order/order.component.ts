import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

@Input() order: any = {}
@Output() deleteRequest = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

    console.log(this.order)
  }

  deleteOrder(value: string){
    console.log('delete clicked' + value)
    this.deleteRequest.emit('Event from Parent')
  }

}
