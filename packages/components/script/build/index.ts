import { src, dest } from "gulp";
import { componentPath } from "../utils/paths";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import autoprefixer from "gulp-autoprefixer";
import delpath from "../utils/delpath";
import run from "../utils/run";
//删除dist
export const removeDist = () => {
  return delpath(`${componentPath}/vue-view-ui`);
};

//处理样式
export const buildStyle = () => {
  const sass = gulpSass(dartSass);
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ["ie > 9", "last 2 versions"],
        cascade: false,
      })
    )
    .pipe(dest(`${componentPath}/vue-view-ui/lib/src`))
    .pipe(dest(`${componentPath}/vue-view-ui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};
