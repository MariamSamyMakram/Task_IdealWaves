import { Component }  from '@angular/core';

@Component ({
    selector:'crud',
    templateUrl: 'app/form/crud.component.html',
    styleUrls:['app/form/style.component.css']
})

export class CrudComponent{
    firstName:string;
    lastName:string;
    Email:Text;
    Age:number;
    Phone:number;
    birthDay:Date;
}


