import { Component } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.sass']
})
export class ImageuploadComponent {

  objectURL = '';
  isSubmitted: boolean = false;

  onFileChange(event: any) {
    //The FileReader object lets web applications asynchronously
    //read the contents of files stored on the user's computer,
    //using File or Blob objects to specify the file or data to read
    
    //converts blob object to url for html img src to display
    this.objectURL = URL.createObjectURL(event.target.files[0]);
    console.log(this.objectURL);
    this.isSubmitted = true;
  }

}
