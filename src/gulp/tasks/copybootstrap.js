export const copybootstrap = () => {
  return app.gulp
    .src(app.path.src.bootstrap)
    .pipe(app.gulp.dest(app.path.build.bootstrap));
};
