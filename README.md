

# gulp-unescape-html [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Code Climate Status][codeclimate-image]][codeclimate-url] 

> A Gulp Plugin for unescape html

## Getting Started

### Install:

```
npm install --save-dev gulp-unescape-html
```

### How to use:

```
var unescapeHtml = require('gulp-unescape-html')

gulp.task('unescaped', function () {
    return gulp.src(['test/html/test.html'])
            .pipe(unescapeHtml())
            .pipe(gulp.dest('test/html-unescaped/'))
});
```

### Examples

Input:

```
&lt;?php ?&gt;
```

Output:

```
<?php ?>
```

[downloads-image]: http://img.shields.io/npm/dm/gulp-unescape-html.svg
[npm-url]: https://www.npmjs.org/package/gulp-unescape-html
[npm-image]: http://img.shields.io/npm/v/gulp-unescape-html.svg

[travis-url]: https://travis-ci.org/jansanchez/gulp-unescape-html
[travis-image]: http://img.shields.io/travis/jansanchez/gulp-unescape-html.svg

[coveralls-url]: https://coveralls.io/r/jansanchez/gulp-unescape-html
[coveralls-image]: https://img.shields.io/coveralls/jansanchez/gulp-unescape-html.svg

[codeship-url]: https://www.codeship.io/projects/44868
[codeship-image]: https://codeship.io/projects/221e0440-44c9-0132-43bc-1e738e05cfd5/status?branch=master

[codeclimate-url]: https://codeclimate.com/github/jansanchez/gulp-unescape-html
[codeclimate-image]: https://codeclimate.com/github/jansanchez/gulp-unescape-html/badges/gpa.svg


