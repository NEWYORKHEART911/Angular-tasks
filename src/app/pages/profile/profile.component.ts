import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Profileserv } from 'src/app/services/profileserv.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  imgSrc = 'assets/d.jpg';
  name: any = 'Name';
  email: string = 'email@example.com';
  contact: string = '1234567890';

  formDataB = false;

  constructor(private profileserv: Profileserv) {}

  loadData() {
    this.formDataB = true;
    console.log(this.formDataB);
  }

  ngOnInit() {
    this.profileserv.data$.subscribe(data => {
      console.log(data);
      this.name= data.name;
      console.log(data.name);
      this.email = data.email;
      console.log(this.email);
      this.contact = data.contact;
      console.log(this.contact);
      this.imgSrc = data.image;
      console.log(this.imgSrc);
      this.loadData();
    })
  }

}
