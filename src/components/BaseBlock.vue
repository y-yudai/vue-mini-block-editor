<template>
  <section class="panel">
    <button class="btn" @click="up">
      <i class="icon icon-upward"></i>
    </button>
    <button class="btn" @click="down">
      <i class="icon icon-downward"></i>
    </button>
    <button class="btn" @click="remove">
      <i class="icon icon-delete"></i>
    </button>
    <header class="panel-header">
      <div class="panel-title">
        <slot name="title"></slot>
      </div>
    </header>
    <article class="panel-body">
      <div class="body">
        <slot name="body"></slot>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  methods: {
    down() {
      this.$store.commit("moveBlockDown", this.block);
    },
    remove() {
      this.$store.commit("removeBlock", this.block);
    },
    up() {
      this.$store.commit("moveBlockup", this.block);
    }
  },
  props: { block: Object }
};
</script>
