import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function findBlock(blocks, block) {
  const rec = blocks => {
    for (let i = 0; i < blocks.length; i++) {
      const x = blocks[i];
      if (x.key == block.key) {
        return { blocks, index: i };
      } else if (x.type == "EnclosureBlock") {
        const r = rec(x.children, block);
        if (r.index > -1) {
          return r;
        }
      }
    }
    return { blocks, index: -1 };
  };
  return rec(blocks);
}

export default new Vuex.Store({
  mutations: {
    moveBlockDown(state, block) {
      const { blocks, index } = findBlock(state.article.blocks, block);
      if (index < blocks.length - 1) {
        blocks.splice(index, 1);
        blocks.splice(index + 1, 0, block);
      }
    },
    moveBlockup(state, block) {
      const { blocks, index } = findBlock(state.article.blocks, block);
      if (index > 0) {
        blocks.splice(index, 1);
        blocks.splice(index - 1, 0, block);
      }
    },
    pushBlock(state, type) {
      let block;
      switch (type) {
        case "EnclosureBlock":
          block = { type, children: [] };
        case "LinkBlock":
          block = { type, label: "", url: "" };
        case "TextBlock":
          block = { type, text: "" };
        default:
        // nop
      }
      block.key = Date.now();
      state.article.blocks.push(block);
    },
    removeBlock(state, block) {
      const { blocks, index } = findBlock(state.article.blocks, block);
      blocks.splice(index, 1);
    }
  },
  state: {
    article: {
      blocks: [
        { key: 1, text: "text1", type: "TextBlock" },
        { key: 2, text: "text2", type: "TextBlock" },
        {
          key: 3,
          label: "Google",
          type: "LinkBlock",
          url: "https://google.com"
        },
        {
          key: 4,
          children: [
            { key: 101, text: "text101", type: "TextBlock" },
            { key: 102, text: "text102", type: "TextBlock" }
          ],
          type: "EnclosureBlock"
        },
        { key: 5, text: "text5", type: "TextBlock" }
      ]
    }
  }
});
