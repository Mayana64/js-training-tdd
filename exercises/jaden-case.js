'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function jadenCase(plop) {
    
    let jadenCasedPlop = plop.charAt(0).toUpperCase() + plop.slice(1).toLowerCase();
    
    // ne fonctionne pas
    for (let index = 0; index < plop.length; index++) {
        if (plop[index] == ' ') {
            jadenCasedPlop = jadenCasedPlop.slice(0, index + 1) +jadenCasedPlop.charAt(index + 1).toUpperCase() + jadenCasedPlop.slice(index + 2);
        }
    }

    return jadenCasedPlop;
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function', 'Should be a function');
assert.strictEqual(jadenCase.length, 1, 'Should take 1 argument');
assert.strictEqual(jadenCase('jadencase-me baby !'), 'Jadencase-me Baby !');
assert.strictEqual(jadenCase('string To jaden Case'), 'String To Jaden Case');


// End of tests */
