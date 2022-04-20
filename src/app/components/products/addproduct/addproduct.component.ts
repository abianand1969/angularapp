import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  myproduct: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
    promotion: false
  }

 //creating form using FormGroup and FormControl classes
  // productForm = new FormGroup({
  //   id: new FormControl(''),
  //   title: new FormControl('',[Validators.required]),
  //   description: new FormControl(''),
  //   price: new FormControl(''),
  //   rating: new FormGroup({
  //     rate: new FormControl(''),
  //     count: new FormControl('')
  //   })
  // })

  //creating form using formbuilder service
  productForm = this.fb.group({
      id: new FormControl(''),
      title: new FormControl(this.myproduct.title,[Validators.required, Validators.maxLength(5) ]),
      description: new FormControl(''),
      price: new FormControl(''),
      rating: this.fb.group({
        rate: new FormControl(''),
        count: new FormControl('')
    }),
    others: this.fb.array([
      this.fb.control('')
    ])
  })

  rate: number = 0
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    if(this.myproduct.price > 10){
      
    }

  }

  submitHandler(){
    console.log(this.productForm.value.title)
  }

  validateName(){

  }

  get others() {
    return this.productForm.get('others') as FormArray;
  }

  addOthers(){
    this.others.push(this.fb.control(''))
  }

  reduceRating(){
    this.productForm.patchValue({
      rating: {
        rate: --this.rate
      }
    });
  }

  increaseRating(){
    this.productForm.patchValue({
      rating: {
        rate: ++this.rate
      }
    });
  }

}
