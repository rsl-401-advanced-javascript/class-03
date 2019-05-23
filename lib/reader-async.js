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
const readAll = async (paths) => {
  let contents = [];

  let i = 0;
  while (i < paths.length) {
    const fileData = util.promisify(fs.readFile);
    await fileData('Promise', paths[i], 'utf8')
      .then(data => {
        console.log(`Read File ${paths[i].split('/')[2]}`);
        contents.push(data.toString().trim());
      })
      .catch(err => { return err; });
      
    i++;
  }

  return contents;
};

module.exports = readAll;