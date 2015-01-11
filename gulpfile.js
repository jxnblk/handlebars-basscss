
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

/*
gulp.task('js', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  gulp.src('./src/js/app.js')
    .pipe(browserified)
    //.pipe(uglify())
    //.pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});
*/

gulp.task('handlebars', function() {
  var fs = require('fs');
  var Handlebars = require('handlebars');
  //var ghandlebars = require('gulp-compile-handlebars');
  Handlebars.registerHelper(require('./src/helpers'));
  Handlebars.registerPartial(require('./src/partials'));
  var data = {
    title: 'Handlebars Basscss'
  };

  var tpl = Handlebars.compile(fs.readFileSync('./src/templates/index.html', 'utf8'));
  var html = tpl(data);
  //console.log(html);
  fs.writeFileSync('./index.html', html);

  //var options = {
  //  handlebars: Handlebars,
  //  partials: require('./src/partials'),
  //  helpers: require('./src/helpers')
  //};
  //gulp.src('./src/templates/**/*')
  //  .pipe(ghandlebars(data, options))
  //  .pipe(gulp.dest('./'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('timer', function() {
  var moment = require('moment');
  var timer = setInterval(function() {
    console.log('[' + moment().format('HH:mm:ss') + ']');
  }, 1000);
});

gulp.task('default', ['handlebars', 'css', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['handlebars', 'css']);
});

