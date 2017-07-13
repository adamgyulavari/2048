(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var offset = function () {
  var val = Math.sqrt(2);
  val *= 10000;
  val -= Math.floor(val);

  return val;
}();

// These are not high quality random numbers but that doesn't matter to us and they are generated
// much faster than the high quality random numbers I was getting from the random-seed npm package.
module.exports = function (seed) {
  // Avoid getting hit by edge cases like 0 or 1 by adding a weird offset.
  var rand = seed + offset;

  for (var i = 0; i !== 10; ++i) {
    rand -= (rand * rand + 1) / (2 * rand);
  }

  rand *= 10000;

  return rand - Math.floor(rand);
};

},{}]},{},[1]);
