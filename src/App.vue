<template>
  <wrapper />
</template>

<script>
import Wrapper from "./components/Wrapper.vue";

import "./assets/css/icofont.min.css";
import "./assets/css/vue-code-highlight.css";

export default {
  components: { Wrapper },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
}

body {
  color: rgba(0, 0, 0, 0.75);
  background: #ffffff;
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media only screen and (max-width: 992px) {
  body {
    overflow: hidden;
  }
}

* {
  outline: none;
  box-sizing: border-box;
}

button,
input,
label,
select {
  font-family: "DM Sans", sans-serif;
  font-size: 1rem;
}

button,
a {
  cursor: pointer;
  outline: none;
  text-decoration: none;
}

button {
  padding: 0;
  border: 0;
  background: transparent;
}

.ps__rail-x,
.ps__rail-y {
  z-index: 2;
}
</style>
