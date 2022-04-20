import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  title = 'firstapp';
  loginStatus = false;

  ngOnInit(): void {
      if(localStorage.getItem('loginStatus') == 'true'){
        this.loginStatus = true
      }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(localStorage.getItem('loginStatus') == 'true'){
      this.loginStatus = true
    }
  }
}
