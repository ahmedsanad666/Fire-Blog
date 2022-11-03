import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { auth, onAuthStateChanged } from "./firebase/firebaseInit";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Vue2Editor from "vue2-editor";
//  global components
import BaseCard from "./components/basics/BaseCard";
import BaseImg from "./components/basics/BaseImg";
import PageTitle from "./components/layout/PageTitle";
import BaseModal from "./components/basics/BaseModal";
import BaseSpinner from "./components/basics/BaseSpinner";

library.add(fas);

const app = createApp(App);

// global components

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-card", BaseCard);
app.component("base-img", BaseImg);
app.component("page-title", PageTitle);
app.component("base-modal", BaseModal);
app.component("base-spinner", BaseSpinner);

let app1;

// auth.onAuthStateChanged(() => {
  // if (!app1) {
    app.use(router);
    app.use(store);
    app.use(Vue2Editor);
    app.mount("#app");
  // }
// });
