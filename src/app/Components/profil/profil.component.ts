import { AuthService } from './../../services/auth.service';
import { UserserviceService } from './../../services/userservice.service';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: User;

  constructor(
    private userserviceService: UserserviceService,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
          (params) => {
            this.userserviceService.getUser(params.id).subscribe(
              (user) => {this.user=user;}
            );
          }      
        );
        console.log("****");
        this.user=this.authservice.userAuthentifiedvalue;
        console.log(this.user);
  }

  // getUser(id : number){
  //   this.userserviceService.getUser(id).subscribe(
  //     (user) => {
  //       this.user=user;
  //     },
  //     (error) => {
  //       alert(`Problème de connexion à votre serveur.`);
  //       console.log(error);
  //     }
  //   );
  // }

  // logout() {
  //   console.log('Tentative de déconnexion');
  
  //   localStorage.removeItem('user');
  //   this.router.navigate(['/login']);
  // }

}
