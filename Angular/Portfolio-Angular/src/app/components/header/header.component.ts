import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo: string = "assets/img/logoArgentinaProgrma.png";
  profile :string = "assets/img/Luffy.jpg";
  nombre: String = "Colby v.";

}
