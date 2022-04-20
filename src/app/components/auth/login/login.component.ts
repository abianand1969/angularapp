import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private flashMsgSvc: FlashMessagesService
  ) { }

  ngOnInit(
    
  ): void {
    // this.authSvc.getUsers()
  }

  loginSubmit(form: any){

    console.log(form.value)
    this.authSvc.login(form.value.email, form.value.password).subscribe(user => {
      console.log(user)
      if(user != 'User Not Found'){
        console.log('Authentication Success')
        this.flashMsgSvc.show("Authentication Success",
        { cssClass: 'alert-success', timeout: 2000 } )
        this.router.navigate(['/home'])
      }else{
        console.log('Authentication Failed')
        this.flashMsgSvc.show("Authentication Failed - "  + user,
        { cssClass: 'alert-danger', timeout: 2000 } )
        this.router.navigate(['/login'])
      }
    })

  }

}
