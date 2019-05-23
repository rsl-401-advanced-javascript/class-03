'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if (!file || file.match(/bad/i)) {
    cb(`${file} has an error`);
  } else {
    setTimeout(() => {
      cb(null, `${file} contents!`);
    }, Math.floor(Math.random() * 50));
  }
};