'use strict';

const argv = require('yargs').argv;
const gulp = require('gulp');
const image = require('gulp-image');
const imageResize = require('gulp-image-resize');
const print = require('gulp-print');

gulp.task('default', () => {
  console.log('Yo, want to make your life easier?');
});

gulp.task('photos-for-mom', () => {
  if (!argv.in || !argv.out) {
    throw new Error('You need --in and --out to process photos');
  }

  console.log(argv.in, argv.out);

  return gulp.src(argv.in)
    .pipe(imageResize({
      width: 2048,
      crop: false,
      upscale: false,
    }))
    .pipe(image())
    .pipe(gulp.dest(argv.out))
    .pipe(print());
});
