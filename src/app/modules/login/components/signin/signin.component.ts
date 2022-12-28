import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { SweetAlertMessage } from 'src/utils/SweetAlertMessage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loading: boolean = false;

  formLogin: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required]]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.formLogin.invalid) {
      SweetAlertMessage('info', 'Información', 'Debes completar los campos.');
      return;
    }
    this.loading = true;

    this.authenticationService.authenticate(this.formLogin.value).subscribe({
      next: resp => {
        localStorage.setItem('token', JSON.stringify(resp['token']));
        this.loading = false;
        this.router.navigate(['/Home']);
      }, error: error => {
        this.loading = false;
        SweetAlertMessage('error', 'Error', error.error.message);
      }
    });
  }
}
