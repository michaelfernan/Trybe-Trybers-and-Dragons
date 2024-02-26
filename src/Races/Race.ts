export default abstract class Race {
  #name: string;
  #dexterity: number;
  
  constructor(name: string, dexterity: number) {
    this.#name = name;
    this.#dexterity = dexterity;
  }
  
  get name(): string {
    return this.#name;
  }
  
  get dexterity(): number {
    return this.#dexterity;
  }
  
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
  
  abstract get maxLifePoints(): number;
}
