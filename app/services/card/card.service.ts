import { Injectable } from 'angular2/core';
import { CARDS } from '../../mocks/cards/mock-cards';

@Injectable()
export class CardService {
  getCards() {
      return Promise.resolve(CARDS);
  }

  getCardsByClassName(name: string)
  {
    switch (name)
    {
        case 'Druid': return this.getCardsByClassId(1);
        default: alert("Only druid is supported right now");
    }
  }
  getCardsByClassId(classid: number)
  {
    return Promise.resolve(CARDS).then(
      cards => cards.filter(cards => cards.classid == classid)
    );
  }

  getCard(id: number){
    return Promise.resolve(CARDS).then(
      cards => cards.filter(card => card.id === id)[0]
    );
  }
  getCardByName(name: string){
    return Promise.resolve(CARDS).then(
      cards => cards.filter(card => card.name === name)[0]
    );
  }
}
