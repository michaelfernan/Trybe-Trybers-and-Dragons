import { EnergyType } from '../Energy'; 
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _instancesCreated = 0;
  readonly energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._instancesCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return this._instancesCreated;
  }
}
