import Race from './Race';

export default class Halfling extends Race {
  private static _instancesCreated = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._instancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
