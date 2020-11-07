'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = (whatDoYouWantToWhisper) => whatDoYouWantToWhisper.toLowerCase();


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('whispering'), 'whispering');
assert.deepStrictEqual(whisper('YELLING'), 'yelling');
assert.deepStrictEqual(whisper('Whisper'), 'whisper');
assert.deepStrictEqual(whisper('Please turn the volume down !'), 'please turn the volume down !');
// End of tests */
