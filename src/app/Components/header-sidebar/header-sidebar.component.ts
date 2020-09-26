import { AuthService } from './../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.css']
})
export class HeaderSidebarComponent implements OnInit {

  user: User;

  constructor(private authService : AuthService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.user=this.authService.getUser();
    // console.log(this.user);
  }

}
