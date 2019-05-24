'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promise-all.js');

describe('File Reader Module With Promise All', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];

    expect(reader(files))
      .rejects.toBeDefined();
  });

  it('error when given less than 3 files', () => {
    let files = ['good.txt'];

    expect(reader(files)).toBe('Less than 3 files provided'); 
  });


  it('reads 3 files', () => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];

    return reader(files)
      .then(result => {
        expect(result instanceof Array).toBeTruthy();
        expect(result.length).toBe(files.length);
        expect(result).toStrictEqual(['file1.txt contents!', 'file2.txt contents!', 'file2.txt contents!']);
      });
  });
});