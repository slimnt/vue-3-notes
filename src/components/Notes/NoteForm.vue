<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type note" />
      <TagList :items="tags" :actives="actives" @onItemClick="handleTagClick" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagList from '@/components/UI/TagList.vue'

export default {
  components: {
    TagList,
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'treble'],
      actives: [],
    }
  },
  methods: {
    onSubmit() {
      const submitResult = {
        noteTitle: this.value,
        tags: this.actives,
      }
      this.$emit('onSubmit', submitResult)
      this.value = ''
      this.actives = []
    },
    handleTagClick(tag) {
      if (this.actives.includes(tag)) {
        const i = this.actives.indexOf(tag)
        this.actives.splice(i, 1)
      } else {
        this.actives.push(tag)
      }
    },
  },
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
