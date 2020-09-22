import { Pole } from './pole';

enum UserRole {
    SUPER= 'SUPER',
    RH = 'RH',
    RP = 'RP',
    COLABORATEUR ='COLABORATEUR'
  }
  
export class User {

    public id: number;
    
    public nom: string;
    
    public prenom: string;
    
    public cin: number;

    public age: number;
    
    public poste: string;

    public salaire: number;
  
    public avatar: string;

    public date_emb: Date;

    public nom_utilisateur: string;

    public mot_de_passe: string;

    public role: UserRole;

    public pole: Pole;

}