<template>
  <div class="btn-group btn-group-block">
    <button class="btn" @click="push('TextBlock')">Text</button>
    <button class="btn" @click="push('LinkBlock')">Link</button>
    <button class="btn" @click="push('EnclosureBlock')" v-if="!enclosed">Enclosure</button>
  </div>
</template>

<script>
export default {
  methods: {
    push(type) {
      this.$store.commit("pushBlock", type);
    }
  },
  props: { enclosed: Boolean }
};
</script>
