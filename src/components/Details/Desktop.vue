<template>
  <Wrapper>
    <Topbar />
    <Frames>
      <Frame
        @click="viewCode(c.name)"
        v-for="c in components"
        :key="c.name"
        :background="c.background"
      >
        <FrameHeader class="frame-header">
          <FrameNumber>#{{ c.id }}</FrameNumber>
        </FrameHeader>
        <FrameComponent>
          <FrameCollab
            v-tippy
            :content="`collab with ${c.collab}`"
            :src="c.image"
          />
        </FrameComponent>
        <LinkWrapper>
          <ViewCodeText
            class="viewcode-text"
            :href="c.projectUrl"
            target="_blank"
          >
            <span
              class="material-icons-outlined"
              :style="{ marginRight: '0.75rem' }"
              >code</span
            >
            View Online
          </ViewCodeText>
          <ViewCodeText
            class="viewcode-text"
            :href="c.githubUrl"
            target="_blank"
          >
            <span
              class="material-icons-outlined"
              :style="{ marginRight: '0.75rem' }"
              >code</span
            >
            View Code
          </ViewCodeText>
          <ViewCodeText class="viewcode-text" :href="c.upwork" target="_blank">
            <span
              class="material-icons-outlined"
              :style="{ marginRight: '0.75rem' }"
              >code</span
            >
            View Upwork
          </ViewCodeText>
        </LinkWrapper>

        <!-- <ViewCodeButton
          class="viewcode-button"
          :background="c.background"
          :isActive="isActive(c.name)"
        >
          <ViewCodeSvg
            :isActive="isActive(c.name)"
            width="64"
            height="64"
            :zIndex="2"
          >
            <ViewCodeCircle :background="c.background" r="22" cx="32" cy="32" />
          </ViewCodeSvg>
        </ViewCodeButton> -->
      </Frame>
      <DetailFrame :activeItemName="activeItemName" :open="detailOpen">
      </DetailFrame>
      <BackButton
        :background="activeItemColor"
        :isActive="$route.params.name && $route.params.name.length > 0"
      >
        <router-link class="material-icons-outlined" :to="{ path: `/` }">
          arrow_back
        </router-link>
      </BackButton>
      <AppFooter />
    </Frames>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import Topbar from "@/components/Topbar/Topbar";
import AppFooter from "@/components/Footer/Footer";

const wrapperProps = { detailOpen: Boolean };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

const Frames = styled("div", wrapperProps)`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  padding-top: 56px;
`;

const detailAnimationIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  40% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const detailAnimationOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const detailProps = {
  open: Boolean,
  activeItemName: String,
  activeItemColor: String,
};

const DetailFrame = styled("div", detailProps)`
  display: flex;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translateX(
    ${(props) => (props.open && props.activeItemName ? "0" : "100%")}
  );

  ${(props) => (props.open ? `animation: ${detailAnimationIn} 1s` : "")};

  ${(props) =>
    !props.open && props.activeItemName
      ? `animation: ${detailAnimationOut} 0.5s`
      : ""};
`;

const frameProps = { background: String };

const Frame = styled("div", frameProps)`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex: 0 0 50%;
  max-height: 500px;
  min-height: 500px;
  background: ${(props) => props.background};

  &:hover .frame-header,
  &:hover .viewcode-text {
    opacity: 1;
  }

  @media (min-width: ${(props) => props.theme.screenWidthXl}) {
    max-height: 700px;
    min-height: 700px;
  }

  @media (min-width: ${(props) => props.theme.screenWidthXxl}) {
    max-height: 900px;
    min-height: 900px;
  }
`;

const FrameHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  opacity: 0;
  padding: 0 3rem;
  font-size: 0.875rem;

  transition: opacity 0.35s;
`;

const FrameNumber = styled.div`
  width: 40px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.38);
`;

const FrameCollab = styled.img`
  width: 80%;
  height: inherit;
`;

const FrameComponent = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const viewCodeProps = { isActive: Boolean, background: String };

// const ViewCodeButton = styled("div", viewCodeProps)`
//   position: absolute;
//   z-index: 2;
//   bottom: 0;
//   left: 0;
//   width: 100%;
// `;

const ViewCodeText = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 700;
  font-size: 0.875rem;
  opacity: 0;
  transition: opacity 0.35s;
  appearance: none;

  & > span {
    font-size: 26px;
  }
`;

// const ViewCodeSvg = styled("svg", viewCodeProps)`
//   position: absolute;
//   z-index: 30;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%)
//     scale(${(props) => (props.isActive ? 200 : 0)});
//   transition: transform ${(props) => (props.isActive ? "2s" : "1s")};
// `;

// const ViewCodeCircle = styled("circle", viewCodeProps)`
//   fill: ${(props) => props.background || "black"};
// `;

const BackButton = styled("div", viewCodeProps)`
  position: fixed;
  z-index: 20;
  top: 3rem;
  left: 3rem;
  transform: translateX(${(props) => (props.isActive ? "0" : "-110px")});
  transition: transform 0.3s linear;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    font-size: 2.5rem;
    border-radius: 50%;
    background: white;
    color: ${(props) => props.background};
    transform: scale(${(props) => (props.isActive ? "1" : "0.65")});
    transition: transform 0.3s linear;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export default {
  props: {
    components: Array,
  },
  components: {
    Wrapper,
    Frames,
    Topbar,
    AppFooter,
    Frame,
    DetailFrame,
    FrameHeader,
    FrameComponent,
    FrameNumber,
    FrameCollab,
    LinkWrapper,
    // ViewCodeButton,
    // ViewCodeSvg,
    // ViewCodeCircle,
    ViewCodeText,
    BackButton,
  },
  data() {
    return {
      activeItemName: undefined,
      activeItemColor: "transparent",
      activeComponent: undefined,
      activeItemCode: "",
      activeItemCollab: "",
      activeItemCollabImage: "",
      activeItemCollabInsta: "",
      activeItemNumber: 0,
    };
  },
  computed: {
    detailOpen() {
      return this.$route.params.name ? true : false;
    },
    interactionTitle() {
      return this.activeItemName && this.activeItemName.replace(/-/g, " ");
    },
  },
  watch: {
    $route(to) {
      if (to.path === "/" && this.activeItemName) {
        setTimeout(() => {
          this.activeItemColor = "transparent";
        }, 1000);
      }

      if (this.$route.params.name) {
        this.loadInteraction();
      }
    },
  },
  methods: {
    isActive(name) {
      return name === this.$route.params.name;
    },
    viewCode(name) {
      this.$router.push({ path: `/${name}` });
    },
    loadInteraction() {
      this.activeItemName = this.$route.params.name;

      const activeItem = this.components.find(
        (obj) => obj.name === this.$route.params.name
      );

      this.activeComponent = activeItem.component;
      this.activeItemColor = activeItem.background;
      this.activeItemNumber = activeItem.id;
      this.activeItemCollabImage = activeItem.image;
      this.activeItemCollabInsta = activeItem.collab;

      //   axios
      //     .get(
      //       `https://raw.githubusercontent.com/vuezy/mi/master/src/components/interactions/${activeItem.githubUrl}`,
      //       { crossdomain: true }
      //     )
      //     .then((response) => {
      //       // handle success
      //       this.activeItemCode = response.data;
      //       // console.log(response);
      //     })
      //     .catch(function (error) {
      //       // handle error
      //       console.log(error);
      //     })
      //     .then(function () {
      //       // always executed
      //     });

      //
    },
  },
  mounted() {
    if (this.$route.params.name) {
      this.loadInteraction();
    }
  },
};
</script>

<style lang="scss" scoped></style>
