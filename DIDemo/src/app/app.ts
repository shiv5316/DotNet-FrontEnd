import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservice } from './userservice';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users: string[] = [];

  constructor(private userService: Userservice) {} 
  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  protected readonly title = signal('DIdemo');
}
