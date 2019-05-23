'use strict';

const fs = require('fs');
const util = require('util');
const getFileData = util.promisify(fs.readFile);

const readOne = (file, arr) => {
  return getFileData(file)
    .then(data => arr.push(data.toString().trim()))
    .catch(err => Promise.reject(err));
};

const readAll = paths => {
  if (paths.length < 3) return 'Less than 3 files provided';
  let contents = [];

  return readOne(paths[0], contents)
    .then(() => readOne(paths[1], contents)
      .then(() => readOne(paths[2], contents)
        .then(() => contents)
      )
      .catch(err => Promise.reject(err))
    )
    .catch(err => Promise.reject(err));
};

module.exports = readAll;