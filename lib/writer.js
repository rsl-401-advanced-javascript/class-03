'use strict';

const fs = require('fs');
const util = require('util');
const fsReadFile = util.promisify(fs.readFile);
const fsWriteFile = util.promisify(fs.writeFile);

const writeFile = async file => {  

  let prevContents = await fsReadFile(file);
  prevContents = prevContents.toString().trim();

  const newContent = new Buffer(Math.random().toString());
  await fsWriteFile(file, newContent);
  const newContents = newContent.toString().trim();
  
  return [newContents, prevContents];
};

module.exports = writeFile;