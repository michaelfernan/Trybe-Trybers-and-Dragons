import Fighter from '../Fighter/Fighter';
import Race from '../Races/Race';
import Archetype from '../Archetypes/Archetype';
import Energy from '../Energy';
import getRandomInt from '../utils';
import { Elf } from '../Races';
import Mage from '../Archetypes/Mage';

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
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
  
  get defense(): number {
    return this._defense;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  get energy(): Energy {
    return { ...this._energy };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    const specialAttackStrength = this._strength * 2; // Dobro da força normal
    enemy.receiveDamage(specialAttackStrength);
  
    // Chance de 20% de recarregar pontos de vida
    if (Math.random() < 0.2) {
      this._lifePoints += specialAttackStrength * 0.5; // Recarrega 50% do dano causado
      if (this._lifePoints > this._maxLifePoints) {
        this._lifePoints = this._maxLifePoints; // Garante que os pontos de vida não ultrapassem o máximo
      }
    }
  }

  levelUp(): void {
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

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }
  
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
  
    return this._lifePoints;
  }
}
