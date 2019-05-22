'use strict';

const fs = require('fs');
const util = require('util');
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files) => {
  readAll(files);
};

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
const readAll = async (paths) => {
  let contents = [];

  let i = 0;
  while (i < paths.length) {
    const fileData = util.promisify(fs.readFile);
    await fileData(paths[i], 'utf8')
      .then(data => {
        console.log(`Read File ${paths[i].split('/')[2]}`);
        contents.push(data.toString().trim());
      })
      .catch(err => { throw err });
      
    i++;
  }

  return contents;
};

