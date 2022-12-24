//Основной модуль
import gulp from "gulp";
//Импорт путей
import { path } from "./gulp/config/path.js";
//Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { copybootstrap } from "./gulp/tasks/copybootstrap.js";
import { copywebfonts } from "./gulp/tasks/copywebfonts.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
//import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";

//Наблюдатели за изменением файлов
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
}

export { svgSprive };
//Последовательноя обработка шрифтов
//const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

//Основные задачи
const mainTasks = gulp.series(
  //fonts,
  gulp.parallel(copy, copybootstrap, copywebfonts, html, scss, js, images)
);

//Построение сценарие выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
//const deployZIP = gulp.series(reset, mainTasks, zip);
const deployZIP = gulp.series(zip);

//Экспорт сценариев
export { dev };
export { build };
export { deployZIP };

//Выполнение сценария по умолчанию
gulp.task("default", dev);
