
var gulp        = require('gulp'),
	compass     = require('gulp-compass'),
	browserSync = require('browser-sync').create(),
	babelify    = require('babelify'),
	plumber     = require('gulp-plumber'),
	source      = require('vinyl-source-stream'),
	uglify      = require("gulp-uglify"),
	browserify  = require('browserify');

gulp.task('default', ['browserSync'], function(){
	gulp.watch('./public/sass/**/*.scss', ["compass"]);
	gulp.watch('./public/js/jsx/*.jsx', ['apply-prod-environment','browserify']);
	//gulp.watch("./public/es6/**/*.js", ["js"]);
} );

gulp.task('apply-prod-environment', function() {
	process.stdout.write("Setting NODE_ENV to 'production'" + "\n");
	process.env.NODE_ENV = 'production';
	if (process.env.NODE_ENV != 'production') {
		throw new Error("Failed to set NODE_ENV to production!!!!");
	} else {
			process.stdout.write("Successfully set NODE_ENV to production" + "\n");
	}
});

gulp.task('browserify', function() {
	browserify('./public/js/jsx/app.jsx', { debug: true  })
	.transform( babelify , { presets: ['es2015', 'react'] })
	.bundle()
	.on("error", function (err) { console.log("Error : " + err.message); })
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./public/js/'))
	.on('end',function(){
		gulp.src(["./public/js/bundle.js"])
		.pipe(plumber())
		.pipe(uglify({mangle: false}))
		.pipe(gulp.dest("./public/js/min"));
	});
});

// gulp.task("js", function() {
// 	gulp.src("./public/es6/**/*.js")
// 		.pipe(plumber())
// 		.pipe(babel({
// 			presets: ['es2015']
// 		}))
// 		.pipe(gulp.dest('./public/js'));
// });

gulp.task('browserSync', function() {
	browserSync.init({
		files: [
			'./public/**/*.html',
			'./public/**/*.php',
			'./public/**/*.css',
			'./public/js/**/*.js',
			'./public/img/**/*'
		],
		proxy: 'http://mylocal.com/react/public/',
	});
});

gulp.task('compass', function(){
	gulp.src('./public/sass/**/*.scss').pipe(compass({
		config_file: './public/config.rb',
		comments: false,
		css: './public/stylesheets/',
		sass: './public/sass/'
	}));
});
