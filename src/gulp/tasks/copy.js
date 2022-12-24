export const copy = () => {
  return app.gulp
    .src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
    .pipe(app.gulp.src(app.path.src.fonts))
    .pipe(app.gulp.dest(app.path.build.fonts));
};
