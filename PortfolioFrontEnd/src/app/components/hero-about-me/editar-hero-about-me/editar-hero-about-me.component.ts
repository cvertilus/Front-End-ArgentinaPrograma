import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroAboutMe } from '../heroAboutMe';

@Component({
  selector: 'app-editar-hero-about-me',
  templateUrl: './editar-hero-about-me.component.html',
  styleUrls: ['./editar-hero-about-me.component.css']
})
export class EditarHeroAboutMeComponent implements OnInit {



  @Input() id: any;
  @Input() title: any;
  @Output() datosIngresado = new EventEmitter<string>();
  editarFormulario!: FormGroup;
  @Input() foto!: Boolean;
  @Input() aboutMe: any;
  @Input() item?: HeroAboutMe;


  constructor(private _formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.editarFormulario = this._formBuilder.group({
      foto_perfil: '',
      about_me: this.item?.about_me

    })
  }


  onEnviar(arg0: any) {
    this.datosIngresado.emit(arg0);
  }

}
