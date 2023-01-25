import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
eliminarTitle() {
this.title = ""
}
test() {
alert("funciono");
}
  title:string ="Acerca de mi";
  aboutMe: string = "Lorem ipsumdolor sit amet consectetur adipisicingelit. Repellat saepe necessitatibus sequi sed exercitationem velit earum. Repudiandae, nihil at,accusantium corporis dicta fugit exercitationem doloremque voluptate sapiente eligendi rerumveritatis"
  profile:string = "assets/img/Luffy.jpg";

}
