const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("js", function() {
  return gulp
    .src("src/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
