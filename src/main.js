import Vue from "vue";
import "./plugins/vuetify";
import VueHighlightJS from "vue-highlight.js";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import cpp from "highlight.js/lib/languages/cpp";
import java from "highlight.js/lib/languages/java";
import kotlin from "highlight.js/lib/languages/kotlin";
import python from "highlight.js/lib/languages/python";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/default.css";

Vue.config.productionTip = false;
Vue.use(VueHighlightJS, {
  languages: {
    cpp,
    java,
    kotlin,
    python,
    javascript
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
