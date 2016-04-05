import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from '../../classes/hero/hero';
import { Card } from '../../classes/card/card';
import { HeroService } from '../../services/hero/hero.service';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'my-deckbuilder',
  templateUrl: 'app/components/deck-builder/deck-builder.component.html',
  styleUrls: ['app/components/deck-builder/deck-builder.component.css']
})
export class DeckBuilderComponent implements OnInit{
  hero: Hero;
  cards: Card[] = [];
  constructor(
    private _heroService: HeroService,
    private _cardService: CardService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let name = this._routeParams.get('name');
    this._heroService.getHeroByName(name)
      .then(hero => this.hero = hero);
    this._cardService.getCardsByClassName(name)
      .then(cards => this.cards = cards);
  }

  goBack() {
    window.history.back();
  }
}
