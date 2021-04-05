import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  message="";
  messages=[];

  constructor() { }

  sendMess(){
    let messages ={
      message: this.message }
    this.messages.push(messages);
    console.log(this.message);
    this.clearField();
  }
  clearField(){
    this.message = "";
  }

  ngOnInit() {
  }

}
