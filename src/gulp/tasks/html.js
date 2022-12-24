//Разбивка на части
import fileInclude from "gulp-file-include";
//Изображение в webp
import webpHtmlNoSvg from "gulp-webp-html-nosvg";
//Кэш к файлам
import versionNumber from "gulp-version-number";

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>",
          })
        )
      )
      .pipe(fileInclude())
      .pipe(app.plugins.replace(/@img\//g, "img/"))
      //Вызов режиме продакшн
      .pipe(app.plugins.if(app.isBuild, webpHtmlNoSvg()))
      //Вызов режиме продакшн
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: "%DT%",
            append: {
              key: "_v",
              cover: 0,
              to: ["css", "js"],
            },
            output: {
              file: "gulp/version.json",
            },
          })
        )
      )

      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browsersync.stream())
  );
};
