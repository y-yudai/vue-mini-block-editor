<template>
  <div>
    <component v-for="block in blocks" :block="block" :is="block.type" :key="block.key"></component>
    <BlockControl :enclosed="false"></BlockControl>
  </div>
</template>

<script>
import BlockControl from "./BlockControl.vue";
import EnclosureBlock from "./EnclosureBlock.vue";
import LinkBlock from "./LinkBlock.vue";
import TextBlock from "./TextBlock.vue";

export default {
  props: { blocks: Array },
  components: {
    BlockControl,
    EnclosureBlock,
    LinkBlock,
    TextBlock
  }
};
</script>
