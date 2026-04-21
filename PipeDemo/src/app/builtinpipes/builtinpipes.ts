import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-builtinpipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './builtinpipes.html',
  styleUrl: './builtinpipes.css',
})
export class Builtinpipes {
  name='Shivansh';
  today=new Date();

  num=1234.5678;
  percentValue=0.85;
  price=1500;

  user={
    name:'Rauhan',
    age:22,
    role:'Developer',
    grade:'Topper'
  };

  items=[10,20,30,40,50];
}
