import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ ADD
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users:any[] = [];

  constructor(private service: UserService) {}

  ngOnInit(){
  this.service.getUsers().subscribe({
    next: (res:any)=>{
      console.log(res); // ✅ CHECK DATA
      this.users = res;
    },
    error: (err)=>{
      console.error(err);
    }
  });
}
}