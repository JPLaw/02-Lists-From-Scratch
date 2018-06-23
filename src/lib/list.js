'use strict';

const List = module.exports = class {
  constructor() {
    this.length = 0;
  }

  push(...args) {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length += 1;
    }
    return this.length;
  }

  map(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error('Empty list');
    }
    const result = new List();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  reduce(callback, accumulator) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error('Empty list');
    }
    if (!accumulator) {
      accumulator = this[0]; /*eslint-disable-line*/
    }
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumualtor, this[i], i); /*eslint-disable-line*/
    }
    return accumulator;
  }

  filter(callback) {
    const filtered = [];
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error('list is empty');
    }
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  }

  forEach(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Expected a function');
    }
    if (!this.length) {
      throw new Error('list is empty');
    }
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  }
};
