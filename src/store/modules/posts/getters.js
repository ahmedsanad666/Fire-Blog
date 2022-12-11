export default {
  postData(state) {
    return {
      blogHeader: state.blogHeader,
      blogHtml: state.blogHtml, // post title
      blogPhotoName: state.blogPhotoName, //pic name
      blogPhotoFileUrl: state.blogPhotoFileUrl, // pic url 
      blogPhotoPreview: state.blogPhotoPreview, //return true false
    };
  },
};
