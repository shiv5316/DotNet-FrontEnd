import { Component } from '@angular/core';
import { SearchPipe } from './search-pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custompipecomp',
  standalone: true,
  imports: [SearchPipe, CommonModule, FormsModule],
  templateUrl: './custompipecomp.html',
  styleUrl: './custompipecomp.css',
})
export class Custompipecomp {
  searchText = '';

  products = [
    'Laptop',
    'Mobile',
    'Headphones',
    'Keyboard',
    'Mouse'
  ];
}
