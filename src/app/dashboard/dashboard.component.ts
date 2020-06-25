import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

datos = [];
option = "";

// Función Traer Personajes
callCharacter() {
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
  }).then((myJson) => {
    this.datos=myJson.results;
  }).catch((error) => {
  });
  this.option="character";
  console.log(this.option);
}
// Función Traer Ubicaciones
callLocations() {
  var myInit =  {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  var myRequest = new Request("https://rickandmortyapi.com/api/location", myInit);
  fetch(myRequest).then((response) => {
    return response.json();
  }).then((myJson) => {
    this.datos=myJson.results;
  }).catch((error) => {
  });
  this.option="location";
  console.log(this.option);
}
// Función Traer Episodios
callEpisodes() {
  var myInit =  {
    method: 'GET',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  var myRequest = new Request("https://rickandmortyapi.com/api/episode", myInit);
  fetch(myRequest).then((response) => {
    return response.json();
  }).then((myJson) => {
    this.datos=myJson.results;
  }).catch((error) => {
  });
  this.option="episode";
  console.log(this.option);
}

}