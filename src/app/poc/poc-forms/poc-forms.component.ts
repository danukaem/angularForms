import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-forms',
  templateUrl: './poc-forms.component.html',
  styleUrls: ['./poc-forms.component.scss']
})
export class PocFormsComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.patch();
    this.fValueName();
    
  }

    pocForm = this.fb.group({
    firstName:['' , [Validators.required]],
    lastName:['', [Validators.required] ],
    customerMobile:['' , [Validators.required]],
    customerEmail:['' ,Validators.email]

  });

  onSubmit(form: any) {
    if(this.pocForm.valid){
    console.log('Your form data : ', form.value);
    }
  }

  get f(){
    return this.pocForm.controls;
  }

  patch(){
    this.pocForm.patchValue({
      firstName: 'dev'
    })
  }

  clear(){
    return this.pocForm.reset();
  }
  
  fValueName(){
    console.log(this.pocForm.controls['firstName'].value);
  }

}
