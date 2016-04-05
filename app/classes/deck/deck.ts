import { Card } from '../card/card';
export class Deck{
  id: number;
  name: string;
  createdDate: number;
  lastUpdatedDate: number;
  minionCount: number;
  spellCount: number;
  craftingCost: number;
  cards: Array<Card> = [];
}
