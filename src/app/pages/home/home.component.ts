import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  getToken() {
    this.authService.getToken().subscribe(respose => {
      localStorage.setItem('token', respose.access_token);
      this.route.navigateByUrl('lanzamientos');
    });
  }

}
