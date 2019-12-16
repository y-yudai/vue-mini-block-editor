<template>
  <BaseBlock :block="block">
    <div slot="title">Text</div>
    <div slot="body">
      <div class="form-horizontal">
        <div class="form-group">
          <textarea class="form-input input-lg" v-model="block.text"></textarea>
        </div>
      </div>
    </div>
  </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";

export default {
  components: { BaseBlock },
  props: { block: Object }
};
</script>
