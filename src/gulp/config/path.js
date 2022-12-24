//Получаем имя папки нашего проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

//путь к папке с результатом
const buildFolder = "./dist";
//путь к папке с исходниками
const srcFolder = "./src";

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
    bootstrap: `${buildFolder}/bootstrap/`,
    webfonts: `${buildFolder}/webfonts/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    fonts: `${srcFolder}/fonts/**/*.*`,
    bootstrap: `${srcFolder}/bootstrap/**/*.*`,
    webfonts: `${srcFolder}/webfonts/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: "",
};
