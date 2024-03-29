import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location } from '../location';

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

  ngOnInit(): void {
    this.getLocations();
  }

}
