import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @Output() addUser = new EventEmitter<User>()

  user: User = {
    id: 0,
    name: {
      firstname: '',
      lastname: '',
    },
    username: '',
    password: '',
    address: {
      geolocation: {
        lat: '',
        long: ''
      },
      number: 0,
      street: '',
      city: '',
      zipcode: ''
  },
    email: '',
    phone: '',
    image: ''
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  formSubmit(form: any){
    console.log(form.value)
    this.user.name.firstname = form.value.firstname;
    this.user.name.lastname = form.value.lastname;
    this.user.email = form.value.email;
    this.user.image = '/assets/placeholder.jpg';

    this.addUser.emit(this.user)

  }

}
