import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "./assets/app.scss";
import $ from "jquery";
window.jQuey = $;
window.$ = $;
// createApp.config.productionTip = false;

createApp(App).use(router).mount("#app");
