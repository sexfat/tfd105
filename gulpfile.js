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