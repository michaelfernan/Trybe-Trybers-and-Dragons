import Fighter from '../Fighter/Fighter';
import Race from '../Races/Race';
import Archetype from '../Archetypes/Archetype';
import Energy from '../Energy';
import getRandomInt from '../utils';
import { Elf } from '../Races';
import Mage from '../Archetypes/Mage';
import SimpleFighter from '../Fighter/SimpleFighter';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: this._archetype.energyType, amount: getRandomInt(1, 10) };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy() { return { ...this._energy }; }

  attack(enemy: SimpleFighter) { enemy.receiveDamage(this._strength); }

  special(enemy: Fighter) {
    const specialAttackStrength = this._strength * 2; 
    enemy.receiveDamage(specialAttackStrength);

    if (Math.random() < 0.2) {
      this._lifePoints = Math.min(this._lifePoints
         + specialAttackStrength * 0.5, this._maxLifePoints);
    }
  }

  levelUp() {
    this._maxLifePoints = Math.min(
      this._race.maxLifePoints,
      this._maxLifePoints + getRandomInt(1, 10),
    );
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  receiveDamage(attackPoints: number) {
    const damage = Math.max(attackPoints - this._defense, 1);
    this._lifePoints = Math.max(this._lifePoints - damage, -1);
    return this._lifePoints;
  }
}
