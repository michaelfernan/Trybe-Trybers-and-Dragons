import { EnergyType } from '../Energy'; 
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static instancesCreated = 0;
  readonly energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.instancesCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesCreated;
  }
}
