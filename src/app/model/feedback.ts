import { EvalTypeEnum } from './../enums/EvalType';
import { Evaluation } from "./evaluation";

export class Feedback {

    public id: number;

    public date: Date;

    public note: number;

    public type: EvalTypeEnum;

    public evaluation : Evaluation;

}