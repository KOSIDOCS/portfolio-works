<template>
  <div class="wrapper">
    <div class="about-subtitle">Tech Stack</div>
    <div class="passions-row" v-for="(item, index) in skills" :key="index">
      <FrameCollab class="passions-icon" :src="item" />
    </div>
  </div>
</template>

<script>
import styled from "vue-styled-components";

const FrameCollab = styled.img`
  width: 100px;
`;

export default {
  name: "AboutPassions",
  props: {
    skills: [],
  },
  components: {
    FrameCollab,
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  @media (min-width: $screenWidthMd) {
    align-items: flex-start;
    margin-bottom: 0;
  }
}
.passions-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
}
.passions-icon {
  color: $colorPrimary;
}
.passions-text {
  font-size: 0.975rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  margin-left: 0.75rem;
}
.about-subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
