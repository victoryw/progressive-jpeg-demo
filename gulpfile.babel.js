import gulp from 'gulp';
import imagemin from 'gulp-imagemin'
import imageminJpegRecompress from 'imagemin-jpeg-recompress'

gulp.task('hello', ()=>{
    console.log("this is test task");
});

gulp.task('default', () =>
    gulp.src('origin-jpg/*')
        .pipe(imagemin([imagemin.jpegtran({progressive: true}), imageminJpegRecompress({min: 95, max:95})]))
        .pipe(gulp.dest('dist/images'))
);