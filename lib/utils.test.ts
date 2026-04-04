import { test, describe } from 'node:test';
import * as assert from 'node:assert';
import { unique } from './utils.ts';

describe('unique', () => {
  test('returns an empty array when given an empty array', () => {
    assert.deepStrictEqual(unique([]), []);
  });

  test('returns the same array if there are no duplicates', () => {
    assert.deepStrictEqual(unique([1, 2, 3, 4]), [1, 2, 3, 4]);
    assert.deepStrictEqual(unique(['a', 'b', 'c']), ['a', 'b', 'c']);
  });

  test('removes duplicate numbers', () => {
    assert.deepStrictEqual(unique([1, 2, 2, 3, 3, 3, 4]), [1, 2, 3, 4]);
  });

  test('removes duplicate strings', () => {
    assert.deepStrictEqual(unique(['apple', 'banana', 'apple', 'orange']), ['apple', 'banana', 'orange']);
  });

  test('handles arrays with all identical elements', () => {
    assert.deepStrictEqual(unique([5, 5, 5, 5]), [5]);
  });

  test('handles mixed types', () => {
    assert.deepStrictEqual(unique([1, '1', 1, '1', true, false, true]), [1, '1', true, false]);
  });

  test('handles null and undefined', () => {
    assert.deepStrictEqual(unique([null, undefined, null, undefined]), [null, undefined]);
  });

  test('uses referential equality for objects and arrays', () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const arr1 = [1];

    // Identical references are removed
    assert.deepStrictEqual(unique([obj1, obj1, obj2]), [obj1, obj2]);

    // Different references with same content are kept
    assert.deepStrictEqual(unique([{ id: 1 }, { id: 1 }]), [{ id: 1 }, { id: 1 }]);
    assert.deepStrictEqual(unique([[1], [1], arr1, arr1]), [[1], [1], arr1]);
  });
});
