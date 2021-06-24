import { Component, OnDestroy, OnInit } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  myWebSocket: WebSocketSubject<any> = webSocket('wss://ws.finnhub.io?token=c3a5lpaad3idt41ddsg0');

  constructor() {
    this.myWebSocket.subscribe(
      msg => console.log(msg),
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
   );
  }

  sendMessageToServer() {
    this.myWebSocket.next(({"type":"subscribe", "symbol": "AAPL"}));
  }

  ngOnInit() {
    this.sendMessageToServer();
  }

  ngOnDestroy() {
    this.myWebSocket.unsubscribe();
  }

}