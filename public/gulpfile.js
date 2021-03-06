var gulp = require ('gulp');
const browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('watch', ['serve'], function(){
	gulp.watch('css/**/*.css', browserSync.reload);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: './'
		},
	});
	// browserSync.watch("*.html").on("change", reload);
});

gulp.task('clean', function() {
	return del('public');
});

gulp.task('assets', function() {
	return gulp.src('app/assets/**', {since: gulp.lastRun('assets')})
		.pipe(newer('public'))
		.pipe(gulp.dest('public'));
});

gulp.task('default', function() {
	gulp.start('watch');
});
