import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/views/heroes.component.html'
    directives: [HeroDetailComponent],
    styleUrls: ['app/styles/heroes.component.css']
})

export class HeroesComponent implements OnInit{
    public heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService, private router: Router){
        //let heroService = new HeroService();
        //this.heroes = heroService.getHeros();
        //this.heroes = this.heroService.getHeroes();
        //this.getHeroes();
    }

    getHeroes(){
        var self = this;
        /*this.heroService.getHeroes().then(function(heroes){
            self.heroes = heroes;
        })*/
        this.heroService.getHeroes().then((heroes) => {this.heroes = heroes});
    }

    ngOnInit() {
        //this.heroes = this.heroService.getHeroes();
        this.getHeroes();
    }

    onSelect(hero: Hero){
        //alert("My hero "+hero.name);
        this.selectedHero = hero;
    }

    gotoDetail(hero: Hero){
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
