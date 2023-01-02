import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit{

  hotelName = "Colby Hotel"
  numbersOfRooms = 10
  hiddenRoomsNumbers = false
  selectedRoom!: RoomList;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomslist: RoomList[] = []

  constructor(private roomServices:RoomsService) { }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }
  toggle() {
    this.hiddenRoomsNumbers = !this.hiddenRoomsNumbers

  }
  roomSelected(room: RoomList): void {
    this.selectedRoom = room

  }

  ngOnInit(): void {
    this.roomslist = this.roomServices.getRooms();
    

  }

  @ViewChild(HeaderComponent) headerComponent:HeaderComponent | undefined;
  addRoom() {
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe room',
      ameninities: 'free wifi , Air conditioner , tv, more',
      price: 550,
      photos: 'https://thumbs.dreamstime.com/z/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
      checkInTime: new Date("11-nov-22"),
      checkOutTime: new Date("25-nov-22")
    }
    this.roomslist = [...this.roomslist,room];
  }

}