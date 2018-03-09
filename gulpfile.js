
/**
 * Created by jefvlamings on 14/05/15.
 */

// Requirements
var gulp                = require('gulp');
var gutil               = require("gulp-util");
var sass                = require('gulp-sass');
var uglify              = require('gulp-uglify');
var notify              = require("gulp-notify");
var webpack             = require("gulp-webpack");
var webpackConfig       = require("./webpack.config.js");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
// Paths
var paths = {
  scripts: ['src/js/**/*.js'],
  sass: ['src/scss/**/*.scss'],
};

// Javascript
gulp.task("javascript", function() {
  return gulp.src('src/js/app.js')
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest('public/javascripts'))
  .pipe(notify("Bundling done."));
});
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
});

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: './bin/www',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

// Sass
gulp.task('sass', function () {
    gulp.src(paths.sass)
        .pipe(sass({ indentedSyntax: true }).on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
});

// Watch task
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['javascript']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(['views/*.handlebars'], reload);
});

// Default task
gulp.task('default', ['watch', 'javascript',  'sass', 'browser-sync']);

// /**
//  * Module Dependencies
//  */

// var gulp = require('gulp');

// const sourcemaps = require('gulp-sourcemaps');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');

// /**
//  * Gulp Tasks
//  */

// gulp.task('es6', () => {
//   console.log("sdfsd")
//   gulp.src('./src/js/**/*.js')
//     .pipe(sourcemaps.init())
//     .pipe(babel({
//         presets: ['env']
//     }))
//     .pipe(concat('main.js'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('public/javascripts'))
// })
// gulp.task('watch', () => {
//   gulp.watch(["./src/js/**/*.js"], ['es6'])
//   gulp.watch(['views/*.handlebars'], reload);
// });

// gulp.task('default', ['watch', 'browser-sync']);