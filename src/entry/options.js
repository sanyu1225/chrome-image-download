import { createApp } from "vue";
import installElementPlus from "@/plugins/element";
import App from "@/views/options.vue";

const app = createApp(App);
installElementPlus(app);
app.mount("#app");
