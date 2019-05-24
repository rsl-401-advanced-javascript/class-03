'use strict';

const writer = require('../../lib/writer.js');

describe('Read and Write to a File', () => {

  it.only('should return new file data', async () => {
    const file = `${__dirname}/../../files/test.txt`;

    const contents = await writer(file);

    expect(contents[0]).not.toBe(contents[1]);

  });

});