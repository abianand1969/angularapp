import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bootnavbar',
  templateUrl: './bootnavbar.component.html',
  styleUrls: ['./bootnavbar.component.css']
})
export class BootnavbarComponent implements OnInit {

  loginStatus = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('loginStatus') == 'true'){
      this.loginStatus = true
    }
  }

  logout(){
    localStorage.setItem('loginStatus', 'false')
    this.router.navigate(['/login'])
  }

}
