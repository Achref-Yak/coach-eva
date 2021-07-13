import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  profileImage: string;
  profileCover: string;
  nomPrenom: string;
  type: string;

  constructor() {
  this.profileImage = 'assets/avatar.png';
  this.profileCover = 'assets/image-cover.jpg';
  this.nomPrenom = 'Achref Yakdhane';
  this.type = 'Coach Sportif';
}

  ngOnInit() {
  }



}
