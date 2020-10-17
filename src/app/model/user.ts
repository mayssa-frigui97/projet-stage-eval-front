import { UserRoleEnum } from './../enums/userrole';
import { Pole } from './pole';

export class User {

    public id: number;
    
    public nom: string;
    
    public prenom: string;
    
    public cin: number;

    public date_naiss: Date | string;
    
    public poste: string;

    public salaire: number;
  
    public avatar: string;

    public date_emb: Date | string;

    public nom_utilisateur: string;

    public mot_de_passe: string;

    public role: UserRoleEnum;

    public pole: Pole;

}