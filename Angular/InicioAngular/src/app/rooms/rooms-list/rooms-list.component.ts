import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RoomsListComponent {
@Input() rooms :RoomList[] =[]
@Output() selectedRoom = new EventEmitter<RoomList>()
constructor(){}
selectRoom(room:RoomList){
  this.selectedRoom.emit(room)
}
}
