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
