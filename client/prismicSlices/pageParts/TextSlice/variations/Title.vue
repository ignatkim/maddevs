<template>
  <div>title variant</div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
