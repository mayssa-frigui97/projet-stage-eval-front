import { UserRoleEnum } from './enums/userrole';
import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj-front';

  private roles: string;
  isLoggedIn = false;
  showSuperBoard = false;
  showColabBoard = false;
  showRhBoard = false;
  showRpBoard = false;
  // username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.role;

      this.showSuperBoard = this.roles.includes(UserRoleEnum.SUPER);
      this.showColabBoard = this.roles.includes(UserRoleEnum.COLABORATEUR);
      this.showRhBoard = this.roles.includes(UserRoleEnum.RH);
      this.showRpBoard = this.roles.includes(UserRoleEnum.RP);
      // this.username = user.nom_utilisateur;
    }
  }
}
