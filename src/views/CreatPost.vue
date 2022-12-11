<template>
  <photo-preview :show="showDialog" @close="closeDialog"></photo-preview>
  <div class="creat-ps">
    <div class="container">
      <div v-if="!!error" class="error-message">
        <p>
          <span>{{ errorMessage }}</span>
        </p>
      </div>
      <!-- blog info -->
      <div class="blog-info">
        <input
          type="text"
          class="blogTitle"
          placeholder="Enter Blog Title"
          v-model.trim="blogHeader"
        />
        <div class="upload-file">
          <input
            type="file"
            id="coverPhoto"
            class="d-none"
            @change="getFileName"
            ref="coverPhoto"
            accept=".png, .jpg, .jpeg"
          />
          <label for="coverPhoto"> Upload Cover Photo</label>
        </div>
        <div class="photoPreview">
          <button @click="openDialog" :class="noUrl ? 'disabled' : ''">
            Preview Photo
          </button>
          <span class="ms-3">{{ noUrl ? "Choosen file" : fileName }}</span>
        </div>
      </div>
      <!-- blog info -->
      <div class="px-3 te">
        <QuillEditor
          theme="snow"
          v-model:content="blogHtml"
          :toolbar="toolbar"
          contentType="html"
        />
        <div class="controls">
          <button @click="sendData">Publish Post</button>
          <button class="preview disabled">
            <router-link :to="{ name: 'BlogPreview' }">
              Preview Post
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import photo preview component
import PhotoPreview from "../components/basics/PhotoPreview.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "creatPost",
  components: {
    QuillEditor,
    PhotoPreview,
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
      showDialog: null,

      // post Data
    };
  },
  computed: {
    noUrl() {
      // return true if no url false if url !null  = true
      return !this.$store.getters["post/postData"].blogPhotoFileUrl;
    },
    fileName() {
      return this.$store.getters["post/postData"].blogPhotoName;
    },
    blogHeader: {
      get() {
        return this.$store.getters["post/postData"].blogHeader;
      },
      set(payload) {
        this.$store.commit("post/blogHeader", payload);
      },
    },
    blogHtml: {
      get() {
        return this.$store.getters["post/postData"].blogHtml;
      },
      set(payload) {
        this.$store.commit("post/blogHtml", payload);
      },
    },
  },
  methods: {
    openDialog() {
      if (this.noUrl) {
        return;
      }
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    getFileName(e) {
      const file = e.target.files[0];
      this.$store.commit("post/addFileName", file.name);
      this.$store.commit("post/addFileUrl", URL.createObjectURL(file));
    },
    validation() {
      if (this.blogHeader == "" || this.blogHtml == "" || this.noUrl) {
        this.error = true;
        this.errorMessage =
          "blogTitle or blogContnet or image file can't be empty ";

        setTimeout(() => {
          this.error = false;
          this.errorMessage = "";
        }, 6000);
      }
    },

    sendData() {
      this.validation();
      if (this.error == true) {
        return;
      }
    },
  },
};
</script>

<tyle lang="scss" scoped>
.blog-info {
  align-items: center;
  padding: 1rem;
  display: flex;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 0.7rem;
  }
  .blogTitle {
    padding: 0.3rem;
    border: none;
    border-bottom: 1px $color-grey solid;
    margin-right: 1.5rem;
  }
  .upload-file {
    label {
      margin-right: 1rem;
      background-color: #2c3e50;
      color: $color-light;
      padding: 0.7rem 1.2rem;
      border-radius: 30px;
      cursor: pointer;
    }
  }

  .photoPreview {
    display: flex;
    align-items: center;
    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      gap: 0.7rem;
    }
    button {
      color: $color-light;
      padding: 0.7rem 1.2rem;
      border-radius: 30px;
      border: none;
      background-color: #2c3e50;
      min-width: 190px;
      margin: auto;
    }
    button.disabled {
      background: #ccc;
      color: $color-grey;
      user-select: none;
      cursor: not-allowed;
    }
  }
}

.te {
  height: 400px !important;
  // border: 1px red solid;
  .controls {
    padding-bottom: 2rem;
    margin-top: 1.5rem;
    button {
      padding: 0.75rem 1.5rem;
      border-radius: 30px;

      outline: none;
      border: none;
      color: $color-light;
      background: #2c3e50;
    }

    button.preview {
      margin-left: 1rem;
    }

    button.disabled {
      background: #ccc;
      color: $color-grey;
      user-select: none;
      cursor: not-allowed;
    }
  }
}

.error-message {
  margin-top: 1rem;
  background: #182430;

  padding-left: 1rem;
  line-height: 40px;

  color: $color-light;
  border-radius: 20px;
}
</tyle>
