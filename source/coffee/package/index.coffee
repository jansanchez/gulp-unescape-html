###
index
@class index
@author Jan Sanchez
###

###
# Module gulp unescape html
###

GulpUnescapeHtml = require('./lib/gulp-unescape-html')


###
# Expose library.
###

module.exports = (html) ->
	gulpUnescapeHtml = new GulpUnescapeHtml(html)
	gulpUnescapeHtml
