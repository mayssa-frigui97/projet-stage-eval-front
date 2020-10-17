import { EvalTypeEnum } from './../enums/EvalType';
import { User } from './user';

export class Evaluation {

    public id: number;

    public date: Date | string;

    public colaborateur : User;

    public rh : User;

    public rp : User;

}