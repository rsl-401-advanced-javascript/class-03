'use strict';

const fs = require('fs');
const util = require('util');

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
const readAll = paths => {
  let contents = [];
  const getFileData = util.promisify(fs.readFile);

  return getFileData(paths[0], 'utf8')
    .then(data => {
      contents.push(data.toString().trim());
      return getFileData(paths[1], 'utf8')
        .then(data => {
          contents.push(data.toString().trim());
          return getFileData(paths[2], 'utf8')
            .then(data => {
              contents.push(data.toString().trim());
              return contents;
            });
        });
    });
};

module.exports = readAll;