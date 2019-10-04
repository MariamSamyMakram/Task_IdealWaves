import { Component }  from '@angular/core';

@Component ({
    selector:'crud',
    templateUrl: 'app/form/crud.component.html',
    styleUrls:['app/form/style.component.css']
})

export class CrudComponent{
    Users:object[] = [
        {id:1 ,firstName:"mariam",lastName:"samy",Email:"mariam.samy@gmail.com",age:23,phone:"01200615561"},
        {id:2 ,firstName:"youseef",lastName:"joe",Email:"youseef.samy@gmail.com",age:25,phone:"01200615561"},
        {id:3 ,firstName:"wafaa",lastName:"samy",Email:"wafaa.samy@gmail.com",age:26,phone:"01200615561"},
        {id:4 ,firstName:"magdy",lastName:"samy",Email:"magdy.samy@gmail.com",age:29,phone:"01200615561"},
        {id:5 ,firstName:"damiana",lastName:"samy",Email:"damiana.samy@gmail.com",age:33,phone:"01200615561"}
    ];


    constructor(){
        let data = localStorage.getItem('data');
    }
}


