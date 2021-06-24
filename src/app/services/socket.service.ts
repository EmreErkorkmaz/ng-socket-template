import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  myWebSocket: WebSocketSubject<any> = webSocket('wss://ws.finnhub.io?token=c3a5lpaad3idt41ddsg0');

  constructor() {
    this.myWebSocket.subscribe(
      msg => console.log('message received: ' + msg),
      // Called whenever there is a message from the server
      err => console.log(err),
      // Called if WebSocket API signals some kind of error
      () => console.log('complete')
      // Called when connection is closed (for whatever reason)
   );
  }

  // sendMessageToServer() {
  //   this.myWebSocket.next({message: 'some message'});
  // }
}
