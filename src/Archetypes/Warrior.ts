import { EnergyType } from '../Energy'; 
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _instancesCreated = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Warrior._instancesCreated += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._instancesCreated;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
