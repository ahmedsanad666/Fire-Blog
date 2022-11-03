import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
export default {
  state: {
    userId: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    nameInit: null,
    isAuthanticated:null
  },
  mutations,
  actions,
  getters,
};
