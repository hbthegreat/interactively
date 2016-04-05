import { Component } from 'angular2/core';
import { Hero } from '../../classes/hero/hero';
import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero/hero.service';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/components/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(
    private _router: Router,
    private _heroService: HeroService) { }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
    this._router.navigate(['DeckBuilder', { name: this.selectedHero.name }]);
  }
}
