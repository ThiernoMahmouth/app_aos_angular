import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth2.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  loginForm !: FormGroup;
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl !: string;


  constructor(private authService: AuthService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() 
  {
    if(this.loginForm.valid)
    {
        this.authService.login(
        {
          username: this.loginForm.get('username')?.value,
          password: this.loginForm.get('password')?.value
        }).subscribe(success => 
        {
          if (success) 
          {
            this.router.navigate(['/accueil']);
          }
          else
          {
            this.loginInvalid = true;
          }
        });
    }
    else
    {
      this.formSubmitAttempt = true;
    }
  }
  onSubmit()
  {
    
  }
}