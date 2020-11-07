'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

var keepFirst = (stringToCut) => stringToCut.slice(0, 2);

var keepLast = (stringToCut) => stringToCut.slice(stringToCut.length-2);

var keepFirstLast = (stringToCut) => keepFirst(stringToCut.slice(2));

//* Begin of tests
const assert = require('assert');
const { stringify } = require('querystring');

assert.strictEqual(typeof keepFirst, 'function', 'Should be a function');
assert.strictEqual(typeof keepLast, 'function', 'Should be a function');
assert.strictEqual(typeof keepFirstLast, 'function', 'Should be a function');
assert.strictEqual(keepFirst.length, 1, 'Should take 1 argument');
assert.strictEqual(keepLast.length, 1, 'Should take 1 argument');
assert.strictEqual(keepFirstLast.length, 1, 'Should take 1 argument');
assert.strictEqual(keepFirst('blabla'), 'bl');
assert.strictEqual(keepLast('blabla'), 'la');
assert.strictEqual(keepFirstLast('blabla'), 'ab');
// End of tests */
