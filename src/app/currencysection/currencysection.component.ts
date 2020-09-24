import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencysection',
  templateUrl: './currencysection.component.html',
  styleUrls: ['./currencysection.component.css']
})
export class CurrencysectionComponent implements OnInit {
  loaded = true;
  euros = "0";
  pounds = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
