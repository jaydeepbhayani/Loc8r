import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService) { }

  public locations: Location[];

  private getLocations(): void {
    this.loc8rDataService
         .getLocations()
           .then(foundLocations => this.locations = foundLocations);
  }

  /*locations: Location[] = [
    {
      _id: '61f5f743044c08b898609904',
      name: 'Starcups',
      distance: 14600,
      address: '25 Sesame Street, Reading RG6 1PS',
      rating: 4,
      facilities: ['Hot Drinks', 'Food', 'Premium Wifi']
    },
    {
      _id: '61f5fb90044c08b898609905',
      name: 'Cafe Hero',
      distance: 14600,
      address: '5 Low Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot Drinks', 'Premium Wifi']
    },
    {
      _id: '61f5fbb3044c08b898609906',
      name: 'Burger Queen',
      distance: 14600,
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Food', 'Premium Wifi']
    }
  ]*/

  name = 'Starcups';

  ngOnInit(): void {
    this.getLocations();
  }

}
