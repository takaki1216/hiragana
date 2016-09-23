var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-ruby-sass');
var using = require('gulp-using');
var pleeease = require('gulp-pleeease');

// sassのコンパイル
gulp.task('sass', function() {
  return sass('gulp/sass/**/*.scss')
    .pipe(plumber())
    .pipe(pleeease({ // 追記
        autoprefixer: {
            browsers: ['last 2 versions']
        },
        minifier: true // minify無効
    }))
    .pipe(gulp.dest('www/htdocs/css'));
});

// gulp.task('cpCssLib', function() {
//   return   gulp.src('gulp/csslib/**/*.css')
//     .pipe(gulp.dest('www/htdocs/css'));
// });


// jsファイルの結合・圧縮
gulp.task('js', function() {
  return gulp.src('gulp/js/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('www/htdocs/js'));
});

// gulp.task('extend', function () {
//   gulp.src('gulp/templates/*.html')
//       .pipe(extender({annotations:false, verbose:false})) // default options 
//       .pipe(gulp.dest('www'));
// })

// ファイル一度だけ実行する
gulp.task('once', ['sass', 'js']);

// ファイルを監視して実行させる
gulp.task('watch', function() {
  gulp.watch('gulp/sass/**/*.scss', ['sass']);
  gulp.watch('gulp/js/**/*.js', ['js']);
});

gulp.task('default', ['once', 'watch']);