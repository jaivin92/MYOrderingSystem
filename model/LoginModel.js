export class Login {
    constructor(req){
        this.email= req.body.email;
        this.password= req.body.password;
    }
}
