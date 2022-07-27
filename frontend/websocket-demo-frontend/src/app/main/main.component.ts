import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "./web-socket.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit(): void {
  }

  onConnectButtonClicked() {
    this.webSocketService.connect();
  }

  onDisconnectButtonClicked() {
    this.webSocketService.disconnect();
  }
}
