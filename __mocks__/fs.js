'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  if( !file || file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    setTimeout(() => {
      cb(undefined, new Buffer('File Contents'));
    }, Math.floor(Math.random() * 5));
  }
};