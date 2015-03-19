###
Gulp Unescape Html
@class GulpUnescapeHtml
@author Jan Sanchez
###

###
# Module dependencies.
###

util = require('util')
through = require('through2')
Buffer = require('buffer').Buffer
extend = util._extend
unescapeHtml = require('unescape-html')

###
# Library.
###

GulpUnescapeHtml = (opts) ->

	@data = {}
	@settings = opts or {}
	@html = ''
	@transform()
	
	return @stream

GulpUnescapeHtml::transform = ()->
	self = @
	
	@stream = through.obj( (chunk, encoding, callback) ->
		self.data.content = chunk.contents.toString()
		self.options = extend(self.settings, self.data)
		self.html = unescapeHtml(self.options.content)
		chunk.contents = new Buffer(self.html, 'utf8')
		callback(null, chunk)
	)
	return

###
# Expose library.
###

module.exports = GulpUnescapeHtml
