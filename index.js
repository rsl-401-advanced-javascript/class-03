'use strict';

const fileReader = require('./lib/reader-callback.js');

// Obtain and assert input
let files = process.argv.slice(2);
files = files.map(file => `${__dirname}/files/${file}`);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

// fileReader(files)
//   .then(results => console.log(results));

fileReader(files, (err, results) => {
  console.log(results)
})
