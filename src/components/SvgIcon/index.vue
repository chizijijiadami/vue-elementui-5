<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconId" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: String,
    className: String
  },
  computed: {
    iconId() {
      return `#icon-${this.iconName}`;
    },
    svgClass() {
      return `svg-icon ${this.iconName} ${this.className} `;
    }
  }
};
</script>

<style scoped lang="stylus">
.svg-icon
  width 2rem
  height 2rem
  fill currentColor
  overflow hidden
</style>
