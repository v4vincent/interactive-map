import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() countrySelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  handlePathClick(event: MouseEvent): void {
    const selectedCountry = event.target as SVGPathElement;
    const countryCode = selectedCountry.getAttribute('id')!;
    this.countrySelected.emit(countryCode.toLowerCase());
  }
  
  
}
