'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-async.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];

    return expect(reader(files)).rejects.toBeDefined();

  });

  it('error when given other than 3 files', async () => {
    let files = ['bad.txt'];

    let result = await reader(files);

    expect(result).toBe('Less than 3 files provided');
  });


  it('reads 3 files', async () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    
    let data = await reader(files);

    expect(data instanceof Array).toBeTruthy();
    expect(data.length).toBe(3);
    expect(data).toStrictEqual(['file1.txt contents!', 'file2.txt contents!', 'file2.txt contents!']);
  });

});