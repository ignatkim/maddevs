<template>
  <button
    type="button"
    class="ui-link-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UILinkButton',
}
</script>

<style lang="scss" scoped>
.ui-link-button {
  @include font('Inter', 16px, 600);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  background-color: transparent;
  border: none;
  box-shadow: none;
  line-height: 20px;
  letter-spacing: -0.4px;
  color: $text-color--blue;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: darken($text-color--blue, 10%);
  }
}
</style>
