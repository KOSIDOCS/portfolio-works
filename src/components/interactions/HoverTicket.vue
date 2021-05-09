<template>
  <StyledTicketVisual
    id="ticket"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    :style="{
      transform: `perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY})`,
    }"
  >
    <StyledCurvesLeft />
    <StyledCurvesRight />
    <StyledTicketVisualWrapper>
      <StyledVisualProfile>
        <StyledProfileWrap>
          <StyledProfileImg
            src="https://github.com/KOSIDOCS.png"
            alt="Kosidocs"
          />
          <StyledProfileText>
            <StyledProfileName>Kosidocs Dev</StyledProfileName>
            <StyledProfileUsername>
              <StyledGithub>
                <img src="@/assets/images/github.svg" alt="github" />
              </StyledGithub>
              KOSIDOCS
            </StyledProfileUsername>
          </StyledProfileText>
        </StyledProfileWrap>
        <StyledTicketEvent>
          <img src="@/assets/images/event-logos.png" alt="eventlogo" />
        </StyledTicketEvent>
      </StyledVisualProfile>
      <StyledNumberWrapper>
        <StyledTicketNumber>№ 014747</StyledTicketNumber>
      </StyledNumberWrapper>
    </StyledTicketVisualWrapper>
  </StyledTicketVisual>
</template>

<script>
import styled from "vue-styled-components";

const backgroundColor = "#000";
const color1 = "#d25778";
const color2 = "#ec585c";
const color3 = "#e7d155";
const color4 = "#56a8c6";

const StyledTicketVisual = styled.div`
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  background: linear-gradient(
    to right,
    ${color1},
    ${color2},
    ${color3},
    ${color4}
  );
  border-radius: 20px;
  padding: 5px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    left: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${color1};
    z-index: 2;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    right: -30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${color4};
    z-index: 2;
  }
`;

const StyledCurvesLeft = styled.div`
  position: absolute;
  top: 110px;
  left: -50px;
  width: 50px;
  height: 100px;
  background: ${backgroundColor};
  z-index: 4;
`;

const StyledCurvesRight = styled.div`
  position: absolute;
  top: 110px;
  right: -50px;
  width: 50px;
  height: 100px;
  background: ${backgroundColor};
  z-index: 4;
`;

const StyledProfileImg = styled.img`
  --size: 1;

  width: calc(82px * var(--size));
  height: calc(82px * var(--size));
  border-radius: 50%;
`;

const StyledProfileName = styled.p`
  --size: 1;

  font-size: calc(32px * var(--size));
  margin: 10px 0 5px 20px;
  font-weight: 700;
  color: white !important;
`;

const StyledProfileUsername = styled.p`
  margin: 0 0 5px 20px;
  color: #8a8f98 !important;
  display: flex;
`;

const StyledGithub = styled.span`
  & img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;

const StyledTicketNumber = styled.div`
  --size: 1;

  transform: rotate(90deg) translateY(calc(100px * var(--size)));
  transform-origin: bottom right;
  font-size: calc(40px * var(--size));
  font-weight: 700;
  text-align: center;
  padding-bottom: 35px;
  width: calc(320px - 10px);
  border-bottom: 2px dashed #333;
  color: white !important;
`;

const StyledTicketVisualWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: ${backgroundColor};
  border-radius: 15px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    left: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${backgroundColor};
    z-index: 3;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 130px;
    right: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${backgroundColor};
    z-index: 3;
  }
`;

const StyledVisualProfile = styled.div`
  --size: 1;

  padding: calc(39px * var(--size)) calc(155px * var(--size))
    calc(39px * var(--size)) calc(58px * var(--size));
`;

const StyledProfileWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledProfileText = styled.div`
  margin: 0;
`;

const StyledTicketEvent = styled.div`
  margin-top: 25px;
  margin-left: -10px;
`;

const StyledNumberWrapper = styled.div`
  position: absolute;
  right: 35px;
  bottom: 0;
`;
export default {
  components: {
    StyledTicketVisual,
    StyledCurvesLeft,
    StyledCurvesRight,
    StyledGithub,
    StyledProfileImg,
    StyledProfileName,
    StyledProfileUsername,
    StyledTicketNumber,
    StyledTicketVisualWrapper,
    StyledVisualProfile,
    StyledProfileWrap,
    StyledProfileText,
    StyledTicketEvent,
    StyledNumberWrapper,
  },
  data() {
    return {
      cardWidth: 0,
      degIncrement: 1.3,
      rotateX: "0deg",
      rotateY: "0deg",
    };
  },
  methods: {
    onMouseMove(e) {
      const event = e || window.event;
      const target = event.target || event.srcElement;
      const rect = target.getBoundingClientRect();
      const cardWidth = 650;

      const degIncrement = this.degIncrement;

      const getRotateDeg = (input) => {
        if (input < cardWidth * 0.33) {
          return `${degIncrement * 3}deg`;
        } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
          return `${degIncrement}deg`;
        } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
          return "0deg";
        } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
          return `-${degIncrement}deg`;
        } else {
          return `-${degIncrement * 2}deg`;
        }
      };

      const rotateX = getRotateDeg(window.event.clientY - rect.top);
      const rotateY = getRotateDeg(window.event.clientX - rect.left);

      this.rotateX = rotateX;
      this.rotateY = rotateY;
    },
    onMouseLeave() {
      this.rotateX = "0deg";
      this.rotateY = "0deg";
    },
  },
};
</script>
