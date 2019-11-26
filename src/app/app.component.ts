import { Component } from '@angular/core';
import { LogiService } from './logi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngEdustage';
  constructor(private myservice : LogiService){}
}
