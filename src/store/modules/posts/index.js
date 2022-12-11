import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
export default {
  namespaced: true,
  state: {
    blogHeader: "",
    blogHtml: "Write your blog here",
    blogPhotoName: "",
   
    blogPhotoFileUrl: null,
    blogPhotoPreview: null,
  },
  mutations,
  actions,
  getters,
};
