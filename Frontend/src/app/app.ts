import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Country, LocationService, State } from './services/location';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  countries: Country[] = [];
  states: State[] = [];
  private statesByCountry = new Map<number, State[]>();

  selectedCountryId: number = 0;
  loading: boolean = false;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.locationService.getLookupData().subscribe({
      next: (data) => {
        this.countries = data.countries;
        this.buildStateIndex(data.states);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  onCountryChange() {
    if (!this.selectedCountryId) {
      this.states = [];
      return;
    }

    this.states = this.statesByCountry.get(this.selectedCountryId) ?? [];
  }

  private buildStateIndex(states: State[]) {
    this.statesByCountry.clear();

    for (const state of states) {
      const existingStates = this.statesByCountry.get(state.countryId) ?? [];
      existingStates.push(state);
      this.statesByCountry.set(state.countryId, existingStates);
    }

    if (this.selectedCountryId) {
      this.states = this.statesByCountry.get(this.selectedCountryId) ?? [];
    }
  }
}
