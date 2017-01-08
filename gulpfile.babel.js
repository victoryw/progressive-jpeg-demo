import gulp from 'gulp';
import imagemin from 'gulp-imagemin'
import imageminJpegRecompress from 'imagemin-jpeg-recompress'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminJpegtran from 'imagemin-jpegtran'
import rm from  'gulp-rm'
import rename from 'gulp-rename'

gulp.task(function hello(done){
    console.log("this is test task");
    done();
});


let cleanDist =() => {
    return gulp.src('dist/**/*', {read: false})
        .pipe(rm());
};

let copyHtml =() => {
    return   gulp.src('index.html')
        .pipe(gulp.dest('dist/'));
};

let copySingleHtml =() => {
    return   gulp.src('single-image/*.html')
        .pipe(gulp.dest('dist/single-image/'));
};

let originJpg =() => {
    return   gulp.src('origin-jpg/mountain.jpg')
        .pipe(rename('mountain-base-line.jpg'))
        .pipe(gulp.dest('dist/images'));
}


let jptran = () =>{
    return gulp.src('origin-jpg/mountain.jpg')
        .pipe(imagemin([imageminJpegtran({progressive: true})]))
        .pipe(rename('mountain-progressive-jptran.jpg'))
        .pipe(gulp.dest('dist/images/'));
};

let jptranCompress =() =>{
    return  gulp.src('origin-jpg/mountain.jpg')
        .pipe(imagemin([imageminJpegtran({progressive: true}),imageminJpegRecompress({min: 98, max:98})]))
        .pipe(rename('mountain-progressive-jptran-recompress.jpg'))
        .pipe(gulp.dest('dist/images/'));
};

let mozjpeg =() =>{
  return gulp.src('origin-jpg/mountain.jpg')
      .pipe(imagemin([imageminMozjpeg({progressive: true,quality: 95})]))
      .pipe(rename('mountain-progressive-moz.jpg'))
      .pipe(gulp.dest('dist/images/'));
};



export default gulp.series(
    cleanDist,
    gulp.parallel(copyHtml,copySingleHtml,jptran,mozjpeg,jptranCompress,originJpg)
);
