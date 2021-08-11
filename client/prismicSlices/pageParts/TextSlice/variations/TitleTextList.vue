<template>
  <div>title + text + list variant</div>
</template>

<script>
export default {
  name: 'TitleTextList',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },

    text: {
      type: String,
      required: true,
      default: '',
    },

    list: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },

  computed: {
    listItems() {
      const items = []
      if (Array.isArray(this.list) && this.list.length) {
        this.list.forEach(({ listItem }) => (listItem ? items.push(listItem) : null))
      }
      return items
    },
  },
}
</script>
