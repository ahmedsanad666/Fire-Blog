import { createStore } from "vuex";

import authModule from "./modules/Auth/index";

const store = createStore({
  modules: {
    auth: authModule,
  },
});

export default store;
