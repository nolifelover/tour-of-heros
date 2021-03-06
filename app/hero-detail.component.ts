import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/views/hero-detail.component.html',
  styleUrls:['app/styles/hero-detail.component.css']
})
export class HeroDetailComponent {
    hero: Hero;
    sub: any;

    constructor( private heroService: HeroService,private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}
