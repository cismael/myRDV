import {Component, OnInit} from '@angular/core';

// My Services
import {MyServiceService} from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'WAZAAAAA';
  myVar = '';

  constructor(private myApiService: MyServiceService) {
  }

  /**
   * Initialisation du composant
   */
  ngOnInit() {
    // On initialise la carte Google Map
    this.sayHello();
  }

  sayHello() {
    this.myApiService.getHello()
      .subscribe(
        response => { this.myVar = JSON.stringify(response).trim().valueOf();
        },
        error => {
          console.log('AppComponent Error : ', error);
        }
      )
  }

}
