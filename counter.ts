export class Counter<K> {
  public actualMap = new Map<K, number>();

  public get(key: K): number {
    let value = this.actualMap.get(key);
    if (value === undefined) {
      value = 0;
    }
    return value;
  }

  public increment(key: K, step: number = 1): number {
    let value = this.get(key) + step;
    this.actualMap.set(key, value);
    return value;
  }

  get size(): number {
    return this.actualMap.size;
  }

  public entries(): Iterator<[K, number]> {
    return this.actualMap.entries();
  }

  public [Symbol.iterator](): Iterator<[K, number]> {
    return this.entries();
  }
}
