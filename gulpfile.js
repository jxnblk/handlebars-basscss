
var gulp = require('gulp');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var minifyCss = require('gulp-minify-css');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var webserver = require('gulp-webserver');

var fs = require('fs');
var Handlebars = require('handlebars');

var marked = require('marked');
var markedExample = require('marked-example');
var cheerio = require('cheerio');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('js', function() {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  gulp.src('./src/js/app.js')
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('handlebars', function() {

  var renderer = new marked.Renderer();
  renderer.code = markedExample({
    classes: {
      container: 'bg-darken-1 rounded',
      rendered: 'p2',
      code: 'p2 bg-darken-1'
    },
    handlebars: true
  });
  var md = fs.readFileSync('./README.md', 'utf8');
  var content = marked(md, { renderer: renderer });

  var $ = cheerio.load(content, { decodeEntities: false });
  var title = $.root().children().first('h1').html();
  title = title.replace('Basscss ', '');
  $.root().children().first('h1').remove();
  $.root().children().first('p').remove();

  fs.writeFileSync('./src/templates/readme.html', $.html());

  Handlebars.registerPartial('content', $.html());

  Handlebars.registerHelper(require('./index'));
  Handlebars.registerPartial(require('./src/partials'));
  var data = {
    title: title,
    navItems: [
      { name: 'Getting Started', href: '#getting-started' },
      { name: 'Button', href: '#button' },
      { name: 'Nav Item', href: '#nav-item' },
      { name: 'Badge', href: '#badge' },
      { name: 'Message', href: '#message' },
      { name: 'Pagination', href: '#pagination' },
      { name: 'Media Object', href: '#media-object' },
      { name: 'Flag Object', href: '#flag-object' },
      { name: 'Panel', href: '#panel' },
      { name: 'Card', href: '#card' },
      { name: 'Nav', href: '#nav' },
      { name: 'Navbar', href: '#navbar' },
      { name: 'Dropdown', href: '#dropdown' },
      { name: 'Button Group', href: '#button-group' },
      //{ name: 'Breadcrumbs', href: '#breadcrumbs' },
      //{ name: 'Modal', href: '#modal' },
    ],
    pages: [
      { href: '?page=1' },
      { href: '?page=2' },
      { href: '?page=3' },
    ]
  };

  var tpl = Handlebars.compile(fs.readFileSync('./src/templates/index.html', 'utf8'));
  var html = tpl(data);
  fs.writeFileSync('./index.html', html);

});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['handlebars', 'css', 'js', 'serve'], function() {
  gulp.watch(['./src/**/*', './README.md'], ['handlebars', 'css', 'js']);
});

