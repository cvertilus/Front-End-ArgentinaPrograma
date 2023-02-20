import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editar-about-me',
  templateUrl: './editar-about-me.component.html',
  styleUrls: ['./editar-about-me.component.css']
})
export class EditarAboutMeComponent {
  @Input() title!:string;

}
