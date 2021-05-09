<template>
  <div class="row">
    <div class="col-sm-12 offset-md-2 col-md-8">
      <div class="wrapper">
        <div class="about-subtitle">Project Description</div>
        <div class="row">
          <div class="col-md-6">
            <div class="skills-list">
              <div class="skills-list-item">{{ details }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSkills",
  props: {
    details: String,
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin-bottom: 20px;
  @media (min-width: $screenWidthMd) {
    padding: 0;
    align-items: flex-start;
  }
}
.skills-subtitle {
  font-size: 1rem;
  font-weight: 800;
  color: $colorPrimary;
  margin-bottom: 0.75rem;
  text-align: center;
  @media (min-width: $screenWidthMd) {
    text-align: left;
    font-size: 0.875rem;
  }
}
.skills-list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto 2rem;
  &.last {
    margin-bottom: 0;
  }
  @media (min-width: $screenWidthMd) {
    justify-content: flex-start;
    width: 100%;
  }
}
.skills-list-item {
  height: 40px;
  font-size: 0.975rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  padding: 0.5rem 0.25rem 0;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}
.about-subtitle {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>
