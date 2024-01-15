import {createApp} from "vue";
import "./styles.css";
import App from "./App.vue";
import {router} from "./router";


const app = createApp(App, {name: "main"});

app.use(router).mount("#app");
