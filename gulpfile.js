var gulp = require('gulp');
var loader = require('gulp-load-plugins')({lazy: true});
var config = require('./GulpConfig')();
var del = require('del');

gulp.task('Hello-world', function(){
    console.log('Hello and welcome!')
});

gulp.task('default', ['sass-Watcher', 'inject'], function(){
    console.log('GULP IS RUNNING');
});

gulp.task('styles', function(){
    console.log('Compiling SASS ---> CSS');
    return gulp.src(config.Sass)
        .pipe(loader.plumber())
        .pipe(loader.sass())
        .pipe(gulp.dest(config.SassDestination))       
});


gulp.task('clean-Styles', function(done){
    var files = config.SassDestination + '/**/*.css';
    clean(files, done);
});


gulp.task('sass-Watcher', function(){
    gulp.watch([config.Sass], ['styles']);
});


gulp.task('wiredep', function(){
     console.log('wirederping bower components...');
   var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;
    
    return gulp
        .src(config.index)
        .pipe(wiredep(options))
        .pipe(loader.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.home))
});

gulp.task('inject', ['wiredep', 'styles'], function(){
     console.log('injecting local css styles!...');
    return gulp
   
        .src(config.index)
        .pipe(loader.inject(gulp.src(config.css)))
        .pipe(gulp.dest(config.home))
});

/////////////////////////

function clean(path, done){
    console.log('Cleaning up...');
    del(path, done);
}