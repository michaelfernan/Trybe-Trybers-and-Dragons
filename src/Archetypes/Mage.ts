import { EnergyType } from '../Energy'; 
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instancesCreated = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instancesCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instancesCreated;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
