export class UserObj {
    email;
    password;
    role;
    constructor(email,password){
        this.email = email;
        this.password = password;
        this.role = 'User';
    }
}
