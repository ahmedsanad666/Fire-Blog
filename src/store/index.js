import { createStore } from "vuex";

import authModule from "./modules/Auth/index";
import postModule from "./modules/posts/index";
const store = createStore({
  modules: {
    auth: authModule,
    post: postModule,
  },
});

export default store;
