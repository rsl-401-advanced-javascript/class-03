'use strict';

const fs = require('fs');

module.exports = exports = (files, callback) => {
  readAll(files, callback);
};

const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(null, data); }
  });
};

const readAll = (paths, callback) => {

  let contents = [];
  readOne(paths[0], (err, data) => {
    if (err) {
      callback(err);
    }
    else {
      contents.push(data.toString().trim());
      
      readOne(paths[1], (err, data) => {
        if (err) {
          callback(err);
        }
        else {
          contents.push(data.toString().trim());
          
          readOne(paths[2], (err, data) => {
            if (err) {
              callback(err);
            }
            else {
              contents.push(data.toString().trim());
              callback(null, contents);
            }
          });
        }
      });
    
    }
  });


};

