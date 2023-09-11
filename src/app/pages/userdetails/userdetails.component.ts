import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from 'src/app/services/userdetails-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.sass']
})
export class UserdetailsComponent implements OnInit {

  users!: any;

  constructor(private userDetailsService: UserdetailsService) {}

  ngOnInit() {
    this.userDetailsService.getUsers().subscribe({
      next: data => {
        this.users = data;
      },
      error: err => console.log(err)
    })
  }

}
