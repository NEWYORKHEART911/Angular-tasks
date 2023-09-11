import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profileserv } from 'src/app/services/profileserv.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.sass']
})
export class EditprofileComponent {

  editProfile = this.formBuilder.group({
    name: ['', {
      validators: [
        Validators.required
      ]
    }],
    email: ['', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }],
    contact: ['', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    }],
    image: ['']
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private profileserv: Profileserv) {}

  sendData() {
    const payload = {
      name: this.editProfile.value['name'],
      email: this.editProfile.value['email'],
      contact: this.editProfile.value['contact'],
      image: this.editProfile.value['image']
    }
    this.profileserv.sendData(payload);
  }

  onSubmit() {
    this.sendData();
    this.router.navigate(['/profile']);
  }

  onFileChange(event: any) {
    //converts blob object to url for html img src to display
    this.editProfile.value['image'] = URL.createObjectURL(event.target.files[0]);
  }

}
