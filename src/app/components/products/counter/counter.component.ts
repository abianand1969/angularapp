import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() count!:number;
  @Output() countChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    ++this.count
    this.countChange.emit(this.count)
  }

  decrement(){
    --this.count
    if(this.count >= 0)
    {
      this.countChange.emit(this.count)
    } else{
      this.count = 0
      this.countChange.emit(this.count)
    }
    
  }

}
