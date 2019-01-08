import { Component } from '@angular/core';
import { UsersService } from 'src/users.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  first_name;
  address;
  city;
  pinCode;

  userName;
  userAddress
  userCity
  userPinCode

  users = [];
  user = { 'id': '', 'first_name': '', 'address': '', 'city': '', 'pincode': '' }
  newObject: any;
  object: any;
  index;

constructor(public userService: UsersService) {
  this.getUsers()
}

getUsers(){
  this.userService.getCustomers().subscribe (
    data => {
      console.log(data)
      this.users = data
    }
  )
}

  addUser() {
    this.userName = this.first_name;
    this.userAddress = this.address;
    this.userCity = this.city;
    this.userPinCode = this.pinCode;

    this.user.first_name = this.userName;
    this.user.address = this.userAddress
    this.user.city = this.userCity;
    this.user.pincode = this.userPinCode;

    this.newObject = Object.assign({}, this.user)

    this.users.push(this.newObject)
    console.log(this.users);

    this.first_name = '';
    this.address = '';
    this.city = '';
    this.pinCode = '';
  }

  editUser() {
    
  }

}
