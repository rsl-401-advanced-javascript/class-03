'use strict';

const fs = require('fs');
const util = require('util');
const writer = require('../../lib/writer.js');
const fsReadFile = util.promisify(fs.readFile);

describe('Read and Write to a File', () => {

  it.only('should return new file data', async () => {
    const file = `${__dirname}/../../files/test.txt`;
    let prevContents = Math.random().toString();
    
    if (fs.access(file, err => console.log('That file doesn\'t exist!', err))) {
      prevContents = await fsReadFile(file);
      prevContents = prevContents.toString().trim();
    }

    await writer(file);
    let newContents = await fsReadFile(file);
    newContents = newContents.toString().trim();

    console.log(`newContents: ${newContents}\nprevContents: ${prevContents}`);

    expect(newContents).not.toBe(prevContents);

  });

});