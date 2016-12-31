"use strict";
/**
 * Generates a random integer
 * @param  {number} // inclusive!
 * @param  {number} // exclusive!
 * @return {number}
 */
module.exports.getRandInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Simulates rolling dice (with optional modifier)
 * @param  {string}
 * @param  {Number}
 * @return {array} // modified, unmodified, dice[]
 */
module.exports.rollMe = function (roll /*ex: '3d6'*/, mod=0) {
  let reQuantity = /^\d+/;
  let reDie      = /\d+$/;
  let quantity   = roll.match(reQuantity);
  let die        = roll.match(reDie);
  let total      = 0;
  let modified   = 0;
  let unmodified = 0;
  let dice       = [];

  /* roll dice */
  for (let x=1; x<=parseInt(quantity[0]); x++) {
    let n = this.getRandInt(1, parseInt(die[0])+1);
    total += n;
    dice.push(n);
  }

  modified = total + mod;
  unmodified = total;

  /* load return object */
  let result = [];
  result.push(modified);
  result.push(unmodified);
  result.push(dice);

  return result;
};