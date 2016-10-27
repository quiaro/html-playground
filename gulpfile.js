const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const mainBowerFiles = require('main-bower-files');

gulp.task('default', [
  'copy-dependencies',
  'copy-html',
  'styles',
  'lint',
  'scripts'], function defaultTask() {
    gulp.watch('sass/**/*.scss', ['styles']);

    gulp.watch('js/**/*.js').on('change', function() {
      gulp.start('lint');
      gulp.start('scripts');
      browserSync.reload();
    });

    gulp.watch('./index.html').on('change', function() {
      gulp.start('copy-html');
      browserSync.reload();
    });

    browserSync.init({
      server: './dist'
    });
  });

gulp.task('copy-dependencies', function() {
  return gulp.src(mainBowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('copy-html', function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function lintTask() {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
  return gulp.src(['js/**/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('scripts', function scriptsTask() {
  // Transform ES6 code to ES5
  gulp.src('js/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function stylesTask() {
  gulp.src('sass/**/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
});
