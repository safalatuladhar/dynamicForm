import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { AppToastService } from 'src/app/services/app-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error = '';
  login:boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastService:AppToastService
    ) {
        
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

    get f() { return this.loginForm.controls; }
    onSubmit() {
      // console.log()
      this.login = false

      this.authService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
          next: () => {
            // console.log()
              // get return url from query parameters or default to home page
              const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              this.router.navigateByUrl(returnUrl);
          },
          error: error => {
              this.error = error;
              if(error){
                console.log("error",error)
                this.toastService.show(
                  'Login Failed',
                  'Check Credentials'
                );
              }
          }
      });
  }
}
