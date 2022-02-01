import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./StyleSheet.css']
})
export class AppComponent {
  login(data: any) {

    console.warn(data);

  }

  register(item: any) {

    console.warn(item);

  }
}
