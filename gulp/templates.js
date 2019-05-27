var gulp = require('gulp');
var config = require("../package.json").config;
var handlebars = require('gulp-compile-handlebars');
var runseq = require('run-sequence');

// режим разработки?
const dev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

var templateData = {
  title: 'Iridium'
},
options = {
  ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
  // partials : {
  //     footer : '<footer>the end</footer>'
  // },
  batch : ['./src/templates/partials'],
  helpers : {
      capitals : function(str){
          return str.toUpperCase();
      }
  }
}

gulp.task('templates', function(cb){
    return gulp.src(config.src.templates + "*.html")
        .pipe(handlebars(templateData, options))
        .pipe(gulp.dest(config.build.html));
    
});

gulp.task('templates:watch', function() {
  gulp.watch(config.src.templates + '**/*.html', ()=>runseq('templates', 'inject'));
  
});

