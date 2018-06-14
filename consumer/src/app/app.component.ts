import { Component } from '@angular/core';
import {HelloService} from 'libex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  initial: number = 90;
  constructor(private helloService: HelloService) {}

  sayHello() {
    this.helloService.sayHello();
  }
}
