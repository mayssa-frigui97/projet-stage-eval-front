import { User } from './../../model/user';
import { UserRoleEnum } from './../../enums/userrole';
import { TokenStorageService } from './../../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.css']
})
export class HeaderSidebarComponent implements OnInit {

  private roles: string;
  user: User;
  isLoggedIn = false;
  showSuperBoard = false;
  showColabBoard = false;
  showRhBoard = false;
  showRpBoard = false;
  username: string;

  constructor( 
    private tokenStorageService: TokenStorageService,
    private router: Router
    ) 
    { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.user = this.tokenStorageService.getUser();
      this.roles = this.user.role;

      this.showSuperBoard = this.roles.includes(UserRoleEnum.SUPER);
      this.showColabBoard = this.roles.includes(UserRoleEnum.COLABORATEUR);
      this.showRhBoard = this.roles.includes(UserRoleEnum.RH);
      this.showRpBoard = this.roles.includes(UserRoleEnum.RP);
      console.log("role:",this.roles);
      console.log("this.showSuperBoard:",this.showSuperBoard);
      this.username = this.user.nom_utilisateur;
    }
  }

  logout(){
    this.tokenStorageService.signOut();
    this.isLoggedIn=false;
    this.router.navigate(['/signout']);
  }

}
