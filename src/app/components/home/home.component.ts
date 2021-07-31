import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clubhome } from 'src/app/clubhome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Home: Clubhome[];
  searchValue: string;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/menu1.json').subscribe((result: Clubhome[]) => {
      this.Home = result;
    })
  }

}
