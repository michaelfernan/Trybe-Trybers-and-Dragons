import Race from './Race';

export default class Elf extends Race {
  private static _instancesCreated = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
