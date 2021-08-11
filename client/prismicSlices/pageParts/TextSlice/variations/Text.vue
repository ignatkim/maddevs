<template>
  <div>text variant</div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
