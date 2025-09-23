<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="(tag, index) in items"
      :key="index"
      @click="onItemClick(tag)"
      :class="{ isPreview: isPreview, isActive: actives?.includes(tag) }"
    >
      <span>{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    actives: {
      type: Array,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onItemClick(tag) {
      this.$emit('onItemClick', tag)
    },
  },
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #ffffff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &last-child {
    margin-right: 0;
  }
}
</style>
