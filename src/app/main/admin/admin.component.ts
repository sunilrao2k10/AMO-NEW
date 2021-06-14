import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  listOfAdmin = [
    {
      username: 1000,
      userID: 'XXXXXX',
      emailAddress: 'XXXXXX',
      role: 'XXXXXX',
      channelRequested: 'XXXXXX',
      channelAccessprovided: 'XXXXXX',
      comment: '',
    },
    {
      username: 1000,
      userID: 'XXXXXX',
      emailAddress: 'XXXXXX',
      role: 'XXXXXX',
      channelRequested: 'XXXXXX',
      channelAccessprovided: 'XXXXXX',
      comment: '',
    },
    {
      username: 1000,
      userID: 'XXXXXX',
      emailAddress: 'XXXXXX',
      role: 'XXXXXX',
      channelRequested: 'XXXXXX',
      channelAccessprovided: 'XXXXXX',
      comment: '',
    },
    {
      username: 1000,
      userID: 'XXXXXX',
      emailAddress: 'XXXXXX',
      role: 'XXXXXX',
      channelRequested: 'XXXXXX',
      channelAccessprovided: 'XXXXXX',
      comment: '',
    },
    {
      username: 1000,
      userID: 'XXXXXX',
      emailAddress: 'XXXXXX',
      role: 'XXXXXX',
      channelRequested: 'XXXXXX',
      channelAccessprovided: 'XXXXXX',
      comment: '',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
