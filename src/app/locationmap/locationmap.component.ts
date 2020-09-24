import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-locationmap',
  templateUrl: './locationmap.component.html',
  styleUrls: ['./locationmap.component.css']
})
export class LocationmapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Configuración de Google Maps 
  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;

}
