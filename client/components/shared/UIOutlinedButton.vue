<template>
  <button
    type="button"
    class="ui-outlined-button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UIOutlinedButton',
  methods: {
    handleClick() {
      if (!this.disabled) this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.ui-outlined-button {
  @include font('Inter', 16px, 600);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-color--grey-pale;
  color: $text-color--quote-box;
  background-color: transparent;
  box-shadow: none;
  border-radius: 4px;
  letter-spacing: -0.4px;
  line-height: 20px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: $border-color--grey-pale;
    color: $text-color--white;
  }
}
</style>
