'use strict';

const fs = require('fs');
const util = require('util');
const writer = require('../../lib/writer.js');
const fsReadFile = util.promisify(fs.readFile);

describe('Read and Write to a File', () => {

  it('should return new file data', async () => {
    const file = `${__dirname}/../../files/test.txt`;

    let prevContents = await fsReadFile(file);
    prevContents = prevContents.toString().trim();
    await writer(file);
    let newContents = await fsReadFile(file);
    newContents = newContents.toString().trim();

    expect(newContents).not.toBe(prevContents);

  });

});