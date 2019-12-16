<template>
  <BaseBlock :block="block">
    <div slot="title">Link</div>
    <div slot="body">
      <div class="form-horizontal">
        <div class="form-group">
          <div class="col-3">
            <label class="form-label label-lg">URL</label>
          </div>
          <div class="col-9">
            <input class="form-input input-lg" type="url" v-model="block.url" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label label-lg">Label</label>
          </div>
          <div class="col-9">
            <input class="form-input input-lg" type="text" v-model="block.label" />
          </div>
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
