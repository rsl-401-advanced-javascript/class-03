'use strict';

const fs = require('fs');
const util = require('util');
const fsWriteFile = util.promisify(fs.writeFile);

const writeFile = file => {
  const newContent = new Buffer(Math.random().toString());
  return fsWriteFile(file, newContent);
};

module.exports = writeFile;