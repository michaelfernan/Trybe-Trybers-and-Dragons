import Race from './Race';

export default class Halfling extends Race {
  private static _instancesCreated = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
