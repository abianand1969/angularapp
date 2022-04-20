import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  constructor(
    private router: Router,
    private flashMegSvc: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this.flashMegSvc.show("Your Registration Success", {
      cssClass: 'alert-success', timeout: 3000
    })
    this.router.navigate(['/login'])
  }
}
