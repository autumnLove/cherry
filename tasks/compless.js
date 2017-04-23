var path = require('path');

module.exports = function(gulp,options,plugins){
    const LessAutoprefix = plugins.autoprofixer;
    const autoprefixer = new LessAutoprefix({ browsers: ['last 3 version']});
    const baseDir = options.paths.baseDir[0];

    gulp.task('compless',function(){
        return gulp.src(['./assest/less/**/*.less','!./assest/less/bootstrap/**/*.less','!./assest/less/font-awesome/**/*.less'])
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.less({
                plugins:[autoprefixer]
            }))
            .pipe(plugins.cssmin())
            .pipe(plugins.rename({suffix:'.min'}))
            .pipe(plugins.sourcemaps.write('./',{addComment:false}))
            .pipe(gulp.dest('./template/default/css'))
    });
}