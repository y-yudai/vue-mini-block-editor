<template>
  <BaseBlock :block="block">
    <div slot="title">Enclosure</div>
    <div slot="body">
      <component v-for="child in block.children" :block="child" :is="child.type" :key="child.key"></component>
      <BlockControl :enclosed="true"></BlockControl>
    </div>
  </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";
import BlockControl from "./BlockControl.vue";
import LinkBlock from "./LinkBlock.vue";
import TextBlock from "./TextBlock.vue";

export default {
  props: { block: Object },
  components: {
    BaseBlock,
    BlockControl,
    LinkBlock,
    TextBlock
  }
};
</script>
