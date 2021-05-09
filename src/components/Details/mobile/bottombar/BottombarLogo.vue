<template>
  <StyledLogoWrapper>
    <StyledJoeImage content="@kosidocs" v-tippy :src="kosiImage" />
    <StyledLogoText> @kosidocs </StyledLogoText>
  </StyledLogoWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
`;

const StyledLogoText = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
  color: rgba(0, 0, 0, 0.57);
  display: none;

  @media (min-width: ${(props) => props.theme.screenWidthMd}) {
    display: block;
  }
`;

const StyledJoeImage = styled.img`
  width: 32px;
  height: 32px;
  border: 2px solid white;
  border-radius: 50%;
`;

export default {
  components: {
    StyledLogoWrapper,
    StyledLogoText,
    StyledJoeImage,
  },
  data: function () {
    return {
      kosiImage: require("@/assets/images/kosidocs-img.svg"),
    };
  },
};
</script>
