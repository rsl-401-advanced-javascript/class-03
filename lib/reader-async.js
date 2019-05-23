'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

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