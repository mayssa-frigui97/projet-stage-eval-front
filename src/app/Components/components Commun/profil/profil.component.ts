import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  // user: User;

  // constructor(
  //   private userserviceService: UserserviceService,
  //   private activatedRoute: ActivatedRoute,
  //   private authservice: AuthService) { 
  // }

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(
  //         (params) => {
  //           this.userserviceService.getUser(params.id).subscribe(
  //             (user) => {this.user=user;}
  //           );
  //         }      
  //       );
  //       console.log("****");
  //       this.user=this.authservice.userAuthentifiedvalue;
  //       console.log(this.user);
  // }

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

  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    console.log("this.currentUser:",this.currentUser);
  }
}
