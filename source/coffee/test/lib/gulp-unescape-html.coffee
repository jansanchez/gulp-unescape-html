###
Test: Gulp Unescape Html
###

gulp = require('gulp')
fs      = require('fs')
gulpUnescapeHtml = require('../../dist/package/index')
through = require('through2')

stream = null

data = fs.readFileSync('./test/html/test.html', 'utf8')



describe('GulpUnescapeHtml', () ->
	options = {}
	
	beforeEach( () ->
		
		return
	)

	describe('Output', () ->

		stream = gulp.src(['../../test/html/test.html'])
			.pipe(gulpUnescapeHtml({
				content: data
			}))

		it('stream should be an javascript object.', () ->
			type = typeof stream
			type.should.be.equal("object")
			return
		)

		#stream.pipe(gulp.dest('../../test/html/unescaped/'))

		return
	)


	return

)
