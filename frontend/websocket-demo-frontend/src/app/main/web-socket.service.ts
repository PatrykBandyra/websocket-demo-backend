import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {GreetingDTO} from "./GreetingDTO";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private readonly WEB_SOCKET_ENDPOINT: string = 'http://localhost:8080/stomp-endpoint';
  private readonly TOPIC: string = '/topic/greetings';

  private stompClient: any

  public connect(): void {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.WEB_SOCKET_ENDPOINT);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (frame: any) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe(this.TOPIC, (webMessage: any) => {
        let greeting: GreetingDTO = JSON.parse(webMessage.body);
        console.log(greeting);
      });
    })
  }

  public disconnect(): void {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
      console.log("Disconnected");
    }
  }

  public sendName(name: string): void {
    this.stompClient.send("/app/hello", {}, JSON.stringify({'name': name}));
  }
}
