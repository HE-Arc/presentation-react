var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    return gulp.src('sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});

gulp.task('default', ['styles']);
