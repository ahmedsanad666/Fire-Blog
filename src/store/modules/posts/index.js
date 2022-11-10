import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
export default {
  namespaced: true,
  state: {
    blogHeader: "Write your blog title here",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileUrl: null,
    blogPhotoPreview: null,
  },
  mutations,
  actions,
  getters,
};
