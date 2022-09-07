/* eslint-disable no-undef */
const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("moveHTML", function() {
  return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

// gulp.task("js", ["moveHTML"], function() {
//   return gulp
//     .src("src/*.js")
//     .pipe(babel())
//     .pipe(gulp.dest("dist"));
// });

gulp.task("js", function() {
  return gulp
    .src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch("src/*js", gulp.series("js"));
});

gulp.task("default", gulp.series("moveHTML", "js", "watch"));
