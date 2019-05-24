'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-callback.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];

    reader(files, (err) => {
      expect(err).toBeDefined();
      done();

    });
  });

  it('error when given other than 3 files', done => {
    let files = ['bad.txt'];

    reader(files, (err) => {
      expect(err).toBeDefined();
      done();

    });
  });


  it('reads 3 files', done => {
    let files = ['file1.txt', 'file2.txt', 'file2.txt'];
    reader(files, (err, data) => {
      expect(err).toBeNull();
      expect(data instanceof Array).toBeTruthy();
      expect(data.length).toBe(3);
      expect(data).toStrictEqual(['file1.txt contents!', 'file2.txt contents!', 'file2.txt contents!']);
      done();
    });
  });

});