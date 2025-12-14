import { Component } from '@angular/core';
import { Cards } from "../../cards/cards";
import { Wedgets } from "../../wedgets/wedgets";
import { StatsTable } from "../../stats-table/stats-table";

@Component({
  selector: 'app-dashboard',
  imports: [Cards, Wedgets, StatsTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
