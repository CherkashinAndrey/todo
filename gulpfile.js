var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

//var dir = "";

gulp.task('serve', function() {

    browserSync.init({
        server: "./" //+ dir
    });

    gulp.watch ('*');
    /*(dir+ "/**").on('change', browserSync.reload);*/
});

gulp.task('default', ['serve']);