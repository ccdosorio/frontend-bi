import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    feather.replace();
  }

  logout(): void {
    console.log('logout');
    this.router.navigate(['/Login/Signin']);
    
  }

}
