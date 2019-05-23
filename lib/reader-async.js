'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);

async function readAll(paths) {
  if (paths.length < 3) return 'Less than 3 files provided'; 
  let contents = [];
  let data;

  for (let i = 0; i < paths.length; i++) {
    data = await fsReadFile(paths[i]);
    contents.push(data.toString().trim());
  }
  
  return contents;
}

module.exports = readAll;