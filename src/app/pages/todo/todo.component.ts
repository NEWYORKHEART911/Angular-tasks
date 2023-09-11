import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent {

  arrayData: any[] = [];
  
  toDoList = this.formBuilder.group({
    workItem: ''
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    this.arrayData.push(this.toDoList.value['workItem']);
    this.toDoList.reset();
  }

  removeItem(index: any) {
    //array.splice(index, howMany, [elements to add])
    this.arrayData.splice(index, 1);
  }

}
