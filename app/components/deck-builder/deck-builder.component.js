System.register(['angular2/core', 'angular2/router', '../../services/hero/hero.service', '../../services/card/card.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hero_service_1, card_service_1;
    var DeckBuilderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (card_service_1_1) {
                card_service_1 = card_service_1_1;
            }],
        execute: function() {
            DeckBuilderComponent = (function () {
                function DeckBuilderComponent(_heroService, _cardService, _routeParams) {
                    this._heroService = _heroService;
                    this._cardService = _cardService;
                    this._routeParams = _routeParams;
                    this.cards = [];
                }
                DeckBuilderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var name = this._routeParams.get('name');
                    this._heroService.getHeroByName(name)
                        .then(function (hero) { return _this.hero = hero; });
                    this._cardService.getCardsByClassName(name)
                        .then(function (cards) { return _this.cards = cards; });
                };
                DeckBuilderComponent.prototype.goBack = function () {
                    window.history.back();
                };
                DeckBuilderComponent = __decorate([
                    core_1.Component({
                        selector: 'my-deckbuilder',
                        templateUrl: 'app/components/deck-builder/deck-builder.component.html',
                        styleUrls: ['app/components/deck-builder/deck-builder.component.css']
                    }), 
                    __metadata('design:paramtypes', [hero_service_1.HeroService, card_service_1.CardService, router_1.RouteParams])
                ], DeckBuilderComponent);
                return DeckBuilderComponent;
            }());
            exports_1("DeckBuilderComponent", DeckBuilderComponent);
        }
    }
});
//# sourceMappingURL=deck-builder.component.js.map