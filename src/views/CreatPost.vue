<template>
  <div class="creat-ps">
    <div class="container">
      <div :class="{ visabile: !!error }" class="error-message">
        <p>
          Error: <span>{{ errorMessage }}</span>
        </p>
      </div>
      <div class="blog-info ">
        <input type="text" placeholder="Enter Blog Title" v-model.trim="blogTitle">
        <div class="upload-file">
          
        </div>
      </div>
      <QuillEditor theme="snow" :toolbar="toolbar" />
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import "@vueup/vue-quill/dist/"
// ............
// import Quill from 'quill'
// window.Quill = require('quill');
// console.log(Quill);
// import { quillEditor } from 'vue-quill-editor'
// import { ImageResize } from 'quill-image-resize-module';
// const ImageResize = require('quill-image-resize-module-fork-for-vue2-editor').defualt;
// Quill.register('modules/imageResize', ImageResize)

export default {
  name: "creatPost",
  components: {
    QuillEditor,
  },
  data() {
    return {
      toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
      ],
      error: null,
      errorMessage: null,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
