export class user {

    id: number;
    
    nom: string;
    
    prenom: string;
    
    age: number;
    
    cin: number;
    
    poste: string;
  
    path: string;

    salaire: number;

    date_emb: Date;

    constructor (
        id: number =0,
        nom: string= '',
        prenom: string='',
        age: number =0,
        cin: number =0,
        poste: string ='',
        path: string ='',
        salaire: number=0,
        )
        {
            this.id=id;
            this.nom=nom;
            this.prenom=prenom;
            this.age=age;
            this.cin=cin;
            this.poste=poste;
            this.path=path;
            this.salaire=salaire;
        }
}