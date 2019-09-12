import uuid from 'uuid'
export  default class Project {
    constructor(name, description='Временное описание', date = new Date() ){
        this.name=name;
        this.description = description;
        this.finishDate = date;
        this.id = uuid.v4();
    }
}