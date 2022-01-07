var gulp        = require('gulp');
var concat      = require('gulp-concat');
var prefix      = require('gulp-autoprefixer');
var pug         = require('gulp-pug');
var sass        = require('gulp-sass')(require('sass')); 
var livereload  = require("gulp-livereload") ;
var sourcemap   = require('gulp-sourcemaps'); 

gulp.task('t1-css' , async function(){
    return gulp.src('project/templet1/css/main.sass')
    .pipe(sourcemap.init())
    .pipe(prefix())
    .pipe(sass())
    .pipe(concat('all2.css'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dest/temp1/css/'))
    
    
});

gulp.task('t1-js' , async function(){
    return gulp.src('project/templet1/js/*.js')
    .pipe(sourcemap.init())
    .pipe(concat('all.js'))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('dest/temp1/js/'))
    
    
} );
gulp.task('t1-html-index' , async function(){
    return gulp.src('project/templet1/html/*.pug')
    .pipe(pug({pretty : true}))
    .pipe(gulp.dest('dest/temp1/'))
    .pipe(livereload());
});
gulp.task('watch-t1' , async function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/templet1/**/*.*' , gulp.series('t1-css'));
    gulp.watch('project/templet1/**/*.*' , gulp.series('t1-js'));
    gulp.watch('project/templet1/**/*.*'  ,gulp.series('t1-html-index'));
 
});