
/*
Test: Gulp Unescape Html
 */
var data, fs, gulp, gulpUnescapeHtml, stream, through;

gulp = require('gulp');

fs = require('fs');

gulpUnescapeHtml = require('../../dist/package/index');

through = require('through2');

stream = null;

data = fs.readFileSync('./test/html/test.html', 'utf8');

describe('GulpUnescapeHtml', function() {
  var options;
  options = {};
  beforeEach(function() {});
  describe('Output', function() {
    stream = gulp.src(['../../test/html/test.html']).pipe(gulpUnescapeHtml({
      content: data
    }));
    it('stream should be an javascript object.', function() {
      var type;
      type = typeof stream;
      type.should.be.equal("object");
    });
  });
});
