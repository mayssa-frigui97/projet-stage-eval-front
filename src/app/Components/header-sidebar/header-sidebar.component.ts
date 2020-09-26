import { TokenStorageService } from './../../services/token-storage.service';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.css']
})
export class HeaderSidebarComponent implements OnInit {

  user: User;

  constructor(private tokenStorage : TokenStorageService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  logout(){
    this.tokenStorage.signOut();
    this.router.navigate(['/signout']);
  }

}
