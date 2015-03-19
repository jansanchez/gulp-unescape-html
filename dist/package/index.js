
/*
index
@class index
@author Jan Sanchez
 */

/*
 * Module gulp unescape html
 */
var GulpUnescapeHtml;

GulpUnescapeHtml = require('./lib/gulp-unescape-html');


/*
 * Expose library.
 */

module.exports = function(html) {
  var gulpUnescapeHtml;
  gulpUnescapeHtml = new GulpUnescapeHtml(html);
  return gulpUnescapeHtml;
};
