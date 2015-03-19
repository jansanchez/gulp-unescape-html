
/*
Gulp Unescape Html
@class GulpUnescapeHtml
@author Jan Sanchez
 */

/*
 * Module dependencies.
 */
var Buffer, GulpUnescapeHtml, extend, through, unescapeHtml, util;

util = require('util');

through = require('through2');

Buffer = require('buffer').Buffer;

extend = util._extend;

unescapeHtml = require('unescape-html');


/*
 * Library.
 */

GulpUnescapeHtml = function(opts) {
  this.data = {};
  this.settings = opts || {};
  this.html = '';
  this.transform();
  return this.stream;
};

GulpUnescapeHtml.prototype.transform = function() {
  var self;
  self = this;
  this.stream = through.obj(function(chunk, encoding, callback) {
    self.data.content = chunk.contents.toString();
    self.options = extend(self.settings, self.data);
    self.html = unescapeHtml(self.options.content);
    chunk.contents = new Buffer(self.html, 'utf8');
    return callback(null, chunk);
  });
};


/*
 * Expose library.
 */

module.exports = GulpUnescapeHtml;
