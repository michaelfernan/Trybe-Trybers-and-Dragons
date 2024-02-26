import Race from './Race';

export default class Orc extends Race {
  private static _instancesCreated = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return Orc._instancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
