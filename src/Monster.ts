import SimpleFighter from './Fighter/SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  readonly strength: number;

  constructor(lifePoints = 85, strength = 10) {
    this._lifePoints = lifePoints;
    this.strength = strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }
}
