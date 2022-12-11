export default {
  addFileName(state, payload) {
    state.blogPhotoName = payload;
  },
  addFileUrl(state, payload) {
    state.blogPhotoFileUrl = payload;

  },
  blogHeader(state,payload){
   state.blogHeader = payload;
  },
  blogHtml(state,payload){
    state.blogHtml =payload;
  }
};
