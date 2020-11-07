'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

const yell = (whatToYouWantToYell) => whatToYouWantToYell.toUpperCase();


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell('whispering'), 'WHISPERING');
assert.deepStrictEqual(yell('YELLING'), 'YELLING');
assert.deepStrictEqual(yell('Angry'), 'ANGRY');
assert.deepStrictEqual(yell('Please turn the volume up !'), 'PLEASE TURN THE VOLUME UP !');
// End of tests */

