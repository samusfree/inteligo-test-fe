import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from '../model/exchange-rate';
import { ExchangeRateService } from '../service/exchange-rate-service.service';

@Component({
  selector: 'app-currencysection',
  templateUrl: './currencysection.component.html',
  styleUrls: ['./currencysection.component.css']
})
export class CurrencysectionComponent implements OnInit {
  loaded = false;
  euros = "0";
  pounds = "0";

  constructor(public exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.getExchangeRate();
  }

  getExchangeRate() {
    this.exchangeRateService.getExchangeRate().subscribe((data: ExchangeRate) => {
      this.euros = data.euroExchangeRate;
      this.pounds = data.poundExchangeRate;
      this.loaded = true;
    })
  }
}
