import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  title = 'ค้นหาเมนูหรือร้านอาหาร';
  httpClient: any;
  states: any;
  Shop = '';
  foods = [];
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit(){
    this.httpClient.get('assets/foods.json').subscribe(data => {

      if (data){
        this.states = Object.entries(data);
        this.states.forEach((state) => {
          state[1].forEach(menu => this.foods.push(menu + ', ' + state[0]));
        });
      }
    });
  }
}
