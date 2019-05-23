'use strict';

module.exports = exports = {};

// exports.readFile = file => {
//   if (!file || file.match(/bad/i)) {
//     throw new Error(`${file} has an error`);
//   } else {
//     setTimeout(() => {
//       return new Buffer(`${file} contents!`);
//     }, Math.floor(Math.random() * 50));
//   }
// };

exports.readFile = (file, cb, type) => {
  if(!file || file.match(/bad/i) ) {
    cb(`${file} has an error`);
  }
  else {
    setTimeout(() => {
      cb(undefined, new Buffer(`${file} contents!`));
    }, Math.floor(Math.random() * 50));
  }
};