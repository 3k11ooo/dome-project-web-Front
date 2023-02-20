import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  sock = new WebSocket('ws://127.0.0.1:8000');

  constructor() { }
  connect(): Subject<string> {
    return webSocket({
      url: "ws://127.0.0.1:8000",
      deserializer: ({ data }) => data  // ここでカスタムのdeserializer関数を渡す
    });
  }

  message(data: string): void {
    this.sock.OPEN;
  }

}
