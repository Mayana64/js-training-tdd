'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:

var cutFirst = (plop) => plop.slice(2);

var cutLast = (plop) => plop.slice(0, -2);

var cutFirstLast = (plop) => cutLast(cutFirst(plop));

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function', 'Should be a function');
assert.strictEqual(typeof cutLast, 'function', 'Should be a function');
assert.strictEqual(typeof cutFirstLast, 'function', 'Should be a function');
assert.strictEqual(cutFirst.length, 1, 'Should take 1 argument');
assert.strictEqual(cutLast.length, 1, 'Should take 1 argument');
assert.strictEqual(cutFirstLast.length, 1, 'Should take 1 argument');
assert.strictEqual(cutFirst('blabla'), 'abla');
assert.strictEqual(cutLast('blabla'), 'blab');
assert.strictEqual(cutFirstLast('blabla'), 'ab');

// End of tests */
