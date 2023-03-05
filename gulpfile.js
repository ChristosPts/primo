const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgcss = require('gulp-purgecss')

/*Compiling sass to css*/
function buildStyles(){
    /*Search for scss in certain folder 
    The double asterix '**' checks for subfolders*/
    return src('primo/**/*.scss')
    .pipe(sass())
    .pipe(purgcss({content: ['*.html'] }))
    .pipe(dest('css'))   
}

/*Actively watch for changes in sass files*/
function watchStyles(){
    watch(['primo/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles,watchStyles)

/*Use underscore '_' for extra sass files so that they wont be compiled to new css files*/