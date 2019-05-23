'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promise.js');

xdescribe('File Reader Module', () => {

  it('when given a bad file, returns an error', async done => {
    let files = ['bad.txt', 'good.txt', 'good.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    const received = reader(files);
    const expected = `${files[0]} has an error`;

    expect(received).toBe(expected);
    done();
  });

  it('error when given other than 3 files', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
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
      done();
    });
  });

});