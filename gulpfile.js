var gulp = require('gulp');
var options = {
    paths:{
        less:['./assest/less/**/*.less'],
        cssmin:['./template/defalut/css/*.css'],
        del:['./template/default/css','./template/default/font','./template/default/js','./template/default/*.html','./template/default/image'],
        imagemin:['./image/*.{jpg,png}'],
        baseDir:['./template/default/']
    }
};
var plugins = {
    less:require('gulp-less'),
    cssmin:require('gulp-cssmin'),
    imagemin:require('gulp-imagemin'),
    sourcemaps:require('gulp-sourcemaps'),
    rename:require('gulp-rename'),
    del:require('del'),
    autoprofixer:require('less-plugin-autoprefix'),
    browserSync:require('browser-sync').create()
};
require('load-gulp-tasks')(gulp,options,plugins);

gulp.task('dist',['copyres','compless','imagemin']);