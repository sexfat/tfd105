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
