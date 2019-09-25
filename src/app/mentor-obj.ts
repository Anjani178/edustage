export class MentorObj {
    email;
    password;
    technologies;
    facilities;
    experience;
    timeStart;
    timeEnd;
    url;
    number;
    role;
    constructor(email,password,technologies,facilities,experience,timeStart,timeEnd,url,number){
        this.email=email;
        this.password=password;
        this.technologies=technologies;
        this.facilities=facilities;
        this.experience=experience;
        this.timeStart= timeStart;
        this.timeEnd=timeEnd;
        this.url=url;
        this.number=number;
        this.role = 'Mentor';
    }

}
