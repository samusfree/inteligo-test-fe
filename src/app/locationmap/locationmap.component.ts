import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GeoPoint } from '../model/geopoint';
import { LocationService } from '../service/location-service.service';


@Component({
  selector: 'app-locationmap',
  templateUrl: './locationmap.component.html',
  styleUrls: ['./locationmap.component.css']
})
export class LocationmapComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  locations: GeoPoint[];
  markers = []
  infoContent = ''

  constructor(public locationService: LocationService) { }

  ngOnInit(): void {
    this.getExchangeRate();

  }

  getExchangeRate() {
    this.locationService.getAtms().subscribe((data: GeoPoint[]) => {
      this.locations = data;
      this.locations.forEach(geoPoint => {
        this.addMarker(geoPoint);
      });
      console.log(this.locations);
    })
  }

  addMarker(geopoint: GeoPoint) {
    this.markers.push({
      position: {
        lat: parseFloat(geopoint.lat),
        lng: parseFloat(geopoint.lng),
      },
      label: {
        color: 'red',
        text: geopoint.name,
      },
      title: geopoint.name,
      info: 'Marker info ' + geopoint.name,
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

  // Configuración de Google Maps 
  center = { lat: 52.1450093, lng: 5.2825826 };
  zoom = 7;
  display?: google.maps.LatLngLiteral;
}
