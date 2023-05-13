import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/service/emailService/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  title:string = "Contact Me"
  email:string = "vertiluscolby@gmail.com"
  formulario!:FormGroup

  constructor(private fb:FormBuilder, private emailService :EmailService){}

  ngOnInit(): void {
    
    this.formulario = this.fb.group({
      nombre:[''],
      email:['',Validators.required],
      mensaje:['']

    })
  }

  public onEnviar(formulario: any){
    console.log(formulario)

    this.emailService.sendEmail(formulario).subscribe(response =>{

      location.href="https://mailthis.to/confirm"
      console.log("la respuesta ",response)
    },
    error =>{
      console.warn("error mad ",error.responseText)
      console.log("error log",error)
    })
  }

}
