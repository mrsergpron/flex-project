import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename"; // Переименование файла
import cleancss from "gulp-clean-css"; // Сжатие Css файла
import webpcss from "gulp-webpcss"; // Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; // Добавление вендерных префиксов для кросбраузерности
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, {
        //Режим продакшн
        sourcemaps: app.isDev,
      })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )

      //Вызов режиме продакшн
      .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
      //Вызов режиме продакшн
      .pipe(
        app.plugins.if(
          app.isBuild,
          webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp",
          })
        )
      )
      //Вызов режиме продакшн
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: true,
            overrideBrowserList: ["last 3 versions"],
            cascade: true,
          })
        )
      )

      // Несжатая копия файла
      .pipe(app.gulp.dest(app.path.build.css))

      //Вызов режиме продакшн
      // Сжатая копия файла
      .pipe(app.plugins.if(app.isBuild, cleancss()))

      .pipe(
        rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream())
  );
};
