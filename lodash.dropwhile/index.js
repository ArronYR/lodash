/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCallback = require('lodash._basecallback'),
    baseSlice = require('lodash._baseslice');

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * bound to `thisArg` and invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `predicate` the created "_.property"
 * style callback returns the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.matches" style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per element.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropWhile([1, 2, 3], function(n) { return n < 3; });
 * // => [3]
 *
 * var users = [
 *   { 'user': 'barney',  'status': 'busy', 'active': true },
 *   { 'user': 'fred',    'status': 'busy', 'active': false },
 *   { 'user': 'pebbles', 'status': 'away', 'active': true }
 * ];
 *
 * // using the "_.property" callback shorthand
 * _.pluck(_.dropWhile(users, 'active'), 'user');
 * // => ['fred', 'pebbles']
 *
 * // using the "_.matches" callback shorthand
 * _.pluck(_.dropWhile(users, { 'status': 'busy' }), 'user');
 * // => ['pebbles']
 */
function dropWhile(array, predicate, thisArg) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  var index = -1;
  predicate = baseCallback(predicate, thisArg, 3);
  while (++index < length && predicate(array[index], index, array)) {}
  return baseSlice(array, index);
}

module.exports = dropWhile;
