/**
* Dependencies.
*/
var gulp = require('gulp'),
    merge = require('merge-stream'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin'),
    pkg = require('./package.json'),
    assets = require('./assets');

var gulpFileCwd = __dirname + '/public';
process.chdir(gulpFileCwd);
util.log('Working directory changed to', gulpFileCwd);

gulp.task('html', function() {
  return gulp.src('../server/views/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
	.pipe(gulp.dest('../dist/server/views/'));
});

gulp.task('scripts', function() {
  return gulp.src(assets.development.js)
        .pipe(concat('bundle-scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('../dist/public/js/'));
});

gulp.task('styles', function() {
  return gulp.src(assets.development.css)
        .pipe(concat('bundle-styles.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('../dist/public/css/'));
});

gulp.task('copy', function() {
  var server_assets = gulp.src('../server/assets/**/*')
		.pipe(gulp.dest('../dist/server/assets/'));

  var server_base = gulp.src('../server/base/**/*')
		.pipe(gulp.dest('../dist/server/base/'));

  var server_locales = gulp.src('../server/locales/**/*')
		.pipe(gulp.dest('../dist/server/locales/'));
		
  var server_config = gulp.src(['../.bowerrc', '../assets.js', '../bower.json', '../package.json', '../server.js'])
		.pipe(gulp.dest('../dist/'));

  return merge(server_assets, server_base, server_locales, server_config);

});

gulp.task('images', function() {
  return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../dist/public/images/'));
});

gulp.task('default', function() {
    gulp.start('html', 'scripts', 'styles', 'copy', 'images');
});