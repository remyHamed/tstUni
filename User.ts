import { ScriptElementKindModifier } from "typescript";

export class User {
    firstName:String;
    lastName:String;
    email:String;
    birthDay:Date;

    constructor(
        firstName:String,
        lastName:String,
        email:String,
        birthDay:Date
    ){
        this.firstName =firstName ;
        this.lastName = lastName;
        this.email = email;
        this.birthDay = birthDay;
    }

    isValide() {
        if(!this.issetFullName(this.firstName))
            return false;
        
        if(!this.issetFullName(this.lastName))
            return false;

        if(!this.checkEmail())
            return false;

    }

    issetFullName(name: String): boolean {
        if(name.length <= 0)
            return false;
        return true;
    }

    checkEmail():boolean {

        if(this.email.length <= 0)
            return false;

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.email.match(regexEmail)) {
            return true; 
        } else {
            return false; 
        }
    }

}