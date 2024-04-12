'use strict';

/**
 * Add up the Numbers from a Single Number
 *
 * @param {number} - The number up to which integers will be summed
 * @returns {number} - The sum of all the numbers from 1 to the input number
 * @throws {Error} - If the input number is less than 0 or greater than 1000
 */

export function addUp(num) {
    if (num < 0 || num > 1000) {
        throw new Error('Expect any positive number between 1 and 1000');
    }
    let addedNum = 0;
    for (let i = 1; i <= num; i++) {
        addedNum += i;
    }
    return addedNum;
}
