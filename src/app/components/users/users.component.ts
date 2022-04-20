import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {


  isActive: boolean = true;

  showForm: boolean = false;

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

  users: User[] = []
  products: any[] = [];

  constructor(
    private userSvc: UserService
  ) { }

  ngOnInit(): void {

  this.userSvc.getUsers().subscribe(users => {
    this.users = users as User[];
  })

    // this.productService.getProductsPromise().then(prods => {
    //  return prods.json()
    // })

  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  formSubmit(form: any){

  }


  addUser(user: User){
    console.log(user)
    this.users.push(user)
    this.showForm = !this.showForm
  }


  

}
