<template>
  <div>
    <section>
      <h2>content</h2>
      <Editor :blocks="article.blocks" />
    </section>
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";
import store from "./store";

export default {
  store,
  components: {
    Editor
  },
  computed: {
    article() {
      return store.state.article;
    }
  }
};
</script>
