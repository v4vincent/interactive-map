import { Component } from '@angular/core';
import { WorldbankService } from './services/worldbank-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-map';
  countryData: any;

  constructor(private worldbankService: WorldbankService) { }

  handlePathClick(countryName: string): void {
    this.worldbankService.getCountryData(countryName).subscribe((response: any) => {
      this.countryData = response[1];
      }
    );
  }
}
