const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


function task_default(cb){
   console.log('gulp ok');
   cb();
}

exports.default = task_default;


//A 任務
function task_a(cb){
    console.log('a mission');
    cb();
 }
// B 任務
 function task_b(cb){
    console.log('b mission');
    cb();
 }

 //有順序
 exports.async = series(task_a , task_b);
 //同時執行任務
 exports.sync = parallel(task_a , task_b);

 // 搬檔案
 function package(){
    return src('src/style.css').pipe(dest('dist'))
  }
 
  exports.p = package;

const rename = require('gulp-rename');

// css minify
  const cleanCSS = require('gulp-clean-css');

  function minicss(){
    return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('dist/css'))
  }

  exports.c = minicss;


  //  js minify ckeck 
const uglify = require('gulp-uglify');

function minijs(){
    return src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js' // 修改附檔名
      //prefix : 'web-' // 前綴字
      //suffix : '-min'  // 後綴字
      //basename : 'all' //更名
    }))
    .pipe(dest('dist/js')) 
}

exports.ugjs = minijs;

// 整合所有檔案



const concat = require('gulp-concat');


function concatall_css(){
    return src('src/*.css')
    .pipe(concat('all.css')) // 整合成一隻css
    .pipe(cleanCSS()) // minify css
    .pipe(dest('dist/css'));
}

exports.allcss = concatall_css;



