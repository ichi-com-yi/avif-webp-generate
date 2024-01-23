// パッケージの読み込み
const gulp = require('gulp');
const squoosh = require('gulp-libsquoosh');
const rename = require('gulp-rename');

// パスの設定
const srcPath = { images: 'assets/images/**/*.+(jpg|jpeg|png)', };
const destPath = { images: 'assets/images', };

// webp と avif への変換
function imageConversion() {
  return gulp.src(srcPath.images)
  .pipe(rename((path) => {
    path.basename += path.extname;
  }))
  .pipe(squoosh({
    encodeOptions: {
      webp: {
        quality: 90,
      },
      avif: {
        quality: 90,
      }
    }
  }))
  .pipe(gulp.dest(destPath.images));
}
exports.imageConversion = imageConversion;
