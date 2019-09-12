import uuid from 'uuid'
export  default class Project {
    constructor(name, description='Временное описание', date = new Date().toString(), id=uuid.v4() ){
        this.name=name;
        this.description = description;
        this.finishDate = new Date(date);
        this.id = id;
    }
}