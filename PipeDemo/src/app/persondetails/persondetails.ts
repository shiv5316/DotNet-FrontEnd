import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonDetails, SalutationPipe } from './salutation.pipe';

@Component({
  selector: 'app-persondetails',
  standalone: true,
  imports: [CommonModule, SalutationPipe],
  templateUrl: './persondetails.html',
  styleUrl: './persondetails.css',
})
export class Persondetails {
  people: PersonDetails[] = [
    {
      name: 'Shivansh',
      age: 21,
      gender: 'male',
      maritalStatus: 'single',
    },
    {
      name: 'Kashish',
      age: 21,
      gender: 'female',
      maritalStatus: 'single',
    },
    {
      name: 'Meera',
      age: 24,
      gender: 'female',
      maritalStatus: 'married',
    },
    {
      name: 'Rauhan',
      age: 21,
      gender: 'male',
      maritalStatus: 'married',
    },
  ];
}