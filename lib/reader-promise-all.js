'use strict';

const fs = require('fs');
const util = require('util');
const getFileData = util.promisify(fs.readFile);

const readAll = paths => {
  if (paths.length < 3) return 'Less than 3 files provided';
  return Promise.all(
    paths.map(path => getFileData(path))
  )
    .then(results => results.map(value => value.toString().trim()));
};

module.exports = readAll; 