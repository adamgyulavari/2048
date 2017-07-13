(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var sqrt2 = Math.sqrt(2);
var sqrt3 = Math.sqrt(3);

module.exports = function (cells) {
  var seed = 0;

  for (var x = 0; x !== 4; x++) {
    for (var y = 0; y !== 4; y++) {
      seed += (sqrt3 + 4 * x + y) * cells[x][y];
    }
  }

  seed *= sqrt2;
  seed -= Math.floor(seed);

  return seed;
};

},{}]},{},[1]);
