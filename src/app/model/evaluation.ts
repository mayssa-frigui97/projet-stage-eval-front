import { User } from './user';

enum EvalType {
    RH= 'RH',
    RP = 'RP',
    COLABORATEUR = 'COLABORATEUR'
  }

export class Evaluation {

    public id: number;

    public date: Date | string;

    public type: EvalType;

    public colaborateur : User;

    public rh : User;

    public rp : User;

}