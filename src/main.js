import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import VueTippy, { TippyComponent } from "vue-tippy";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faVuejs,
  faInstagram,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faTag, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

Vue.use(VueTippy);
Vue.component("tippy", TippyComponent);

library.add(faGithub);
library.add(faInstagram);
library.add(faVuejs);
library.add(faTag);
library.add(faEdit);
library.add(faTrashAlt);
library.add(faReact);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
