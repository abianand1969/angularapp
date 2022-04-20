import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { User } from '../components/users/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin: any;
  users: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    this.http.get(environment.apiUrl + 'users').subscribe(users =>{
      return users as User[]
    })
  }

  login(email: string, pwd: string){    
      return new Observable(subscriber => {
        this.http.get(environment.apiUrl + 'users').subscribe(users => {
        this.users = users as User[];
        const user = this.users.find(user => user.email == email && user.password == pwd);
       console.log(user)
        if(user != null) {
          subscriber.next({user: user, authStatus: true})
          localStorage.setItem('loginStatus', 'true')
        }else {
          subscriber.next('User Not Found')
        }
      })
    })
  }

  isAdmin(){
    this.admin = this.users.find(user => user.username == 'anandan')
    if(this.admin != null){
      console.log(this.admin)
      return true
    }else{
      console.log(this.admin)
      return false
    }
  }
}
