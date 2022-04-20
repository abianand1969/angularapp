import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment  } from 'src/environments/environment';
import { User } from '../components/users/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){
    return new Observable(subscriber => {
      this.http.get(environment.apiUrl + 'users').subscribe(users => {
        subscriber.next(users as User[])
      })
    })
  }

  getUserById(id: string){
    return new Observable(subscriber => {
      this.http.get(`${environment.apiUrl}users/${id}`).subscribe(user => {
        console.log(user)
        subscriber.next(user as User)
      })
    })
  }
}
