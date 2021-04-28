import { createApp } from "vue";
import installElementPlus from "@/plugins/element";
import App from "@/views/popup.vue";

const app = createApp(App);
installElementPlus(app);
app.mount("#app");
