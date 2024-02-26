import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monsters = monsters;
  }

  private individualFight(monster: SimpleFighter): void {
    while (this._character.lifePoints > -1 && monster.lifePoints > -1) {
      this._character.attack(monster);

      if ('attack' in monster) {
        monster.attack(this._character);
      }
    }
  }

  fight(): number {
    this._monsters.forEach((monster) => {
      this.individualFight(monster);
    });

    return this._character.lifePoints === -1 ? -1 : 1;
  }
}
