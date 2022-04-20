import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:any = {}
  showextended = false;
  localLap: any;
  uid: any;

  constructor(private route: ActivatedRoute,
    private userSvc: UserService) { }

  ngOnInit(): void {
    // this.uid = this.route.snapshot.paramMap.get('id')

    // this.userSvc.getUserById(this.uid).subscribe(user => {
    //   console.log(user)
    // })

    }

    setShowExtended(){
      this.showextended = !this.showextended;
    }

}
