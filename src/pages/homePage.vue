<template>
  <NoteForm @onSubmit="handleSubmit" />
  <ListNotes @onRemove="handleRemove" :items="notes" />
</template>

<script>
import ListNotes from '@/components/Notes/ListNotes.vue'
import NoteForm from '@/components/Notes/NoteForm.vue'

export default {
  components: {
    NoteForm,
    ListNotes,
  },
  mounted() {
    this.getNotes()
  },
  data() {
    return {
      notes: [
        {
          title: 'Learn Vue 3',
          tags: ['work'],
        },
        {
          title: 'Finish course',
          tags: ['work', 'home'],
        },
      ],
    }
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handleSubmit({ noteTitle, tags }) {
      const note = {
        title: noteTitle,
        tags: [...tags] ?? [],
      }
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true,
    },
  },
}
</script>
