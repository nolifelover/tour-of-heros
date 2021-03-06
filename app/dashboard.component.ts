import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/views/dashboard.component.html',
  styleUrls: ['app/styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) { }

    ngOnInit(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
        //this.heroService.getHeroes().then((heroes) => {this.heroes = heroes});
    }

    gotoDetail(hero: Hero){
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
