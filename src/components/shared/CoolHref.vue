<template>
  <a class="cool-href" :href="href">
    <span class="material-icons-outlined" :style="{ marginRight: '0.75rem' }"
      >code</span
    >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: String,
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";

.cool-href {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 700;
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 0.35s;

  & > span {
    font-size: 26px;
  }
}
</style>
