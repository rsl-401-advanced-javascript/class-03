'use strict';

const fileReaderA = require('./lib/reader-async.js');
const fileReaderP = require('./lib/reader-promise.js');
const fileReaderC = require('./lib/reader-callback.js');
const fileReaderPA = require('./lib/reader-promise-all.js');
const writer = require('./lib/writer.js');

// Obtain and assert input
let files = process.argv.slice(2);
files = files.map(file => `${__dirname}/files/${file}`);

if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

if (files.length >= 3) {
  fileReaderC(files, (err, results) => {
    console.log('RESULTS FROM CALLBACK METHOD', results);
  });
  
  fileReaderP(files)
    .then(results => console.log('RESULTS FROM PROMISE METHOD', results));
  
  fileReaderA(files)
    .then(results => console.log('RESULTS FROM ASYNC METHOD', results));
  
  fileReaderPA(files)
    .then(results => console.log('RESULTS FROM PROMISE All METHOD', results));
}

writer(files[0])
  .then(results => console.log(results));