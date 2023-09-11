import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.sass']
})
export class SearchproductComponent {

  products = [
    {product: "laptop", price: 1099, description: "portable computer"},
    {product: "mobile", price: 199, description: "phone"},
    {product: "desktop", price: 799, description: "traditional computer"},
    {product: "mouse", price: 14, description: "pointer"},
    {product: "keyboard", price: 16, description: "type language"},
    {product: "headphones", price: 20, description: "hear language"}
  ]

  product = this.formBuilder.group({
    searchProduct: ''
  })

  doSearch: string ='';

  constructor(private formBuilder: FormBuilder) {}

}
