import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName = "Colby Hotel"
  numbersOfRooms = 10
  hiddenRoomsNumbers = false
  selectedRoom!:RoomList;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }
  roomslist: RoomList[] = []

  constructor() { }
  toggle() {
    this.hiddenRoomsNumbers = !this.hiddenRoomsNumbers

  }
  roomSelected(room: RoomList): void {
    this.selectedRoom = room

  }

  ngOnInit(): void {
    this.roomslist = [
      {
        roomNumber: 1,
        roomType: 'Deluxe room',
        ameninities: 'free wifi , Air conditioner , tv, more',
        price: 50,
        photos: 'https://thumbs.dreamstime.com/z/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
        checkInTime: new Date("11-nov-22"),
        checkOutTime: new Date("25-nov-22")
      },
      {
        roomNumber: 2,
        roomType: 'Simple room',
        ameninities: 'free wifi , Air conditioner , tv',
        price: 10,
        photos: 'https://thumbs.dreamstime.com/z/hotel-room-26001164.jpg',
        checkInTime: new Date("01-nov-22"),
        checkOutTime: new Date("10-nov-22")
      },
      {
        roomNumber: 3,
        roomType: 'Private suite',
        ameninities: 'free wifi , Air conditioner , tv,more',
        price: 100,
        photos: 'https://thumbs.dreamstime.com/z/hotel-room-26001164.jpg',
        checkInTime: new Date("01-nov-22"),
        checkOutTime: new Date("10-nov-22")
      }
    ]
  }

}