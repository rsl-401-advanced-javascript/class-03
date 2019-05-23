'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

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
async function readAll(paths) {
  let contents = [];
  let data;

  for (let i = 0; i < paths.length; i++) {
    data = await fsReadFile(paths[i]);
    contents.push(data.toString().trim());
  }
  
  return contents;
}

module.exports = readAll;