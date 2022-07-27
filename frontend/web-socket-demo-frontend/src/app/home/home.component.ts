import {Component, OnInit} from '@angular/core';
import {StompService} from "../../stomp.service";
import {GreetingService} from "../../greeting.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Greeting} from "../../greeting";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  messages: string[] = [];

  constructor(private stompService: StompService, private greetingService: GreetingService,
              private snackbar: MatSnackBar) {
  }
  //
  // private openSnackBar(message: string, action: string) {
  //   this.snackbar.open(message, action);
  // }
  //
  // onGetGreetingButtonClick() {
  //   this.greetingService.getGreeting().subscribe({
  //     next: (greeting: Greeting) => {
  //       console.log(greeting);
  //       this.openSnackBar(greeting.message, 'Close');
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   });
  // }

  ngOnInit(): void {
    this.stompService.subscribe('/topic/hello', (greeting: Greeting) => {
      this.messages.push(greeting.message)
    });
  }

}
