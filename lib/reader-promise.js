'use strict';

const fs = require('fs');
const util = require('util');
const getFileData = util.promisify(fs.readFile);

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

const readOne = (file, arr) => {
  return getFileData(file)
    .then(data => arr.push(data.toString().trim()));
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = paths => {
  let contents = [];

  return readOne(paths[0], contents)
    .then(() => readOne(paths[1], contents)
      .then(() => readOne(paths[2], contents)
        .then(() => contents)
      )
    );
};

module.exports = readAll;