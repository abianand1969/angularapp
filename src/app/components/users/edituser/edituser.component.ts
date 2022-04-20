import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  uid: any;
  constructor(
    private route: ActivatedRoute,
    private userSvc: UserService
  ) { }

  ngOnInit(): void {
    this.uid = this.route.snapshot.paramMap.get('id')
    this.userSvc.getUserById(this.uid).subscribe(user =>{
      console.log(user)
    })
  }

}
