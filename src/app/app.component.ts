import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimerProyecto';


  datos = [];
  dashb = true;

  llamarServicio() {
    var myInit =  {
      method: 'GET',
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
  
    };
  
    var myRequest = new Request("https://rickandmortyapi.com/api/character", myInit);
  
    fetch(myRequest).then((response) => {
      return response.json();
    }).then((myJson) => {debugger
      this.datos=myJson.results;
    }).catch((error) => {
  
    });
  
  }

  irDashBoard() {
    this.dashb=!this.dashb;
  }

}




