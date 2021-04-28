import { ElButton } from "element-plus";
import zhTW from "element-plus/lib/locale/lang/zh-tw";
import locale from "element-plus/lib/locale";
import "element-plus/lib/theme-chalk/index.css";

const component = [ElButton];

export default (app) => {
  locale.use(zhTW); //element lang
  component.forEach((e) => {
    app.use(e);
    return null;
  });
};
