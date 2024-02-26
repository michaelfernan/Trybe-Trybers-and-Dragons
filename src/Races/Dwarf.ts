import Race from './Race';

export default class Dwarf extends Race {
  private static _instancesCreated = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
