import Comparator from '../comparator';

describe('Comparator', () => {
  it('should compare using default comparator function', () => {
    const comparator = new Comparator();

    expect(comparator.equal(0, 0)).toBe(true);
    expect(comparator.equal(0, 1)).toBe(false);
    expect(comparator.equal('a', 'a')).toBe(true);
    expect(comparator.lessThan(1, 2)).toBe(true);
    expect(comparator.lessThan(-1, 2)).toBe(false);
    expect(comparator.lessThan('a', 'b')).toBe(true);
    expect(comparator.lessThan('a', 'ab')).toBe(true);
    expect(comparator.lessThan(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(1, 1)).toBe(true);
    expect(comparator.lessThanOrEqual(0, 0)).toBe(true);
    expect(comparator.greaterThan(10, 0)).toBe(true);
    expect(comparator.greaterThan(0, 0)).toBe(false);
    expect(comparator.greaterThanOrEqual(10, 0)).toBe(true);
    expect(comparator.greaterThanOrEqual(10, 10)).toBe(true);
    expect(comparator.greaterThanOrEqual(0, 10)).toBe(false);
  });

  it('should compare with custom compare function', () => {
    const comparator = new Comparator((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    expect(comparator.equal(0, 0)).toBe(true);
    expect(comparator.equal(1, 0)).toBe(false);
    expect(comparator.equal('a', 'b')).toBe(false);
    expect(comparator.equal('a', 'a')).toBe(true);
    expect(comparator.lessThan(1, 2)).toBe(true);
    expect(comparator.lessThan(-1, 2)).toBe(false);
    expect(comparator.lessThan('a', 'b')).toBe(true);
    expect(comparator.lessThan('a', 'ab')).toBe(true);
    expect(comparator.lessThan(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(10, 2)).toBe(false);
    expect(comparator.lessThanOrEqual(1, 1)).toBe(true);
    expect(comparator.lessThanOrEqual(0, 0)).toBe(true);
    expect(comparator.greaterThan(10, 0)).toBe(true);
    expect(comparator.greaterThan(0, 0)).toBe(false);
    expect(comparator.greaterThanOrEqual(10, 0)).toBe(true);
    expect(comparator.greaterThanOrEqual(10, 10)).toBe(true);
    expect(comparator.greaterThanOrEqual(0, 10)).toBe(false);
  });
});
