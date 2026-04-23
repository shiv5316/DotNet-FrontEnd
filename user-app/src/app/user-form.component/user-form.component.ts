import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'; // ✅
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

form: any;

constructor(private fb: FormBuilder, private service: UserService) {
  this.form = this.fb.group({
    password: ['', Validators.required],
    aadharNo: ['', [Validators.required, Validators.minLength(12)]]
  });
}
  submit(){
  console.log(this.form.value);

  this.service.addUser(this.form.value).subscribe({
    next: (res) => {
      alert("Saved");
    },
    error: (err) => {
      console.error(err); 
    }
  });
}

  openList(){
    window.open('/list', '_blank'); // NEW PAGE
  }
}