import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  email:string = '';
  password:string = '';

  constructor(private authService: AuthService, private router: Router) {
    console.log("login component");
  }

  login(): void{
    this.authService.login(this.email,this.password).subscribe({
      next: ()=>this.router.navigate(["/dashboard"]),
      error: (err)=>console.error('login failed', err) 
    })
 
  }

}
