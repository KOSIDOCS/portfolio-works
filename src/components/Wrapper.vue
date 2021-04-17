<template>
  <Wrapper>
    <IntroMessage />
    <Desktop v-if="$vssWidth > 992" :components="slides" />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import VueScreenSize from "vue-screen-size";

import Desktop from "@/components/Details/Desktop";
import IntroMessage from "@/components/shared/IntroMessage";

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    Wrapper,
    Desktop,
    IntroMessage,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "HealthCare Web App",
          collab: "Upwork Client (HealthCare Web App)",
          image: require("@/assets/images/worktrim.png"),
          background: "#4f57ad",
          githubUrl: "https://www.worktrim.com/",
          projectUrl: "https://www.worktrim.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 2,
          name: "Meow Job Board Platform",
          collab: "kosidocs on JobBoard Platform",
          image: require("@/assets/images/meow.png"),
          background: "#1E064B",
          githubUrl: "https://github.com/KOSIDOCS/meowjobapp",
          projectUrl: "https://meowjobapp.herokuapp.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 3,
          name: "Honor SmartWatch Landing Page",
          collab: "Kosidocs on Honor SmartWatch Landing Page",
          image: require("@/assets/images/smartwatch.png"),
          background: "#65A9CD",
          githubUrl: "https://github.com/KOSIDOCS/honor-smartwatch",
          projectUrl: "https://kosidocs.github.io/honor-smartwatch/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 4,
          name: "Gmail and Mailchimp Contact form",
          collab: "Kosidocs on Mailchimp and Gmail Contact Form",
          image: require("@/assets/images/form.png"),
          componentProps: { buttonId: "list-ripple" },
          background: "#354286",
          githubUrl: "https://github.com/KOSIDOCS/contact-us-form",
          projectUrl: "https://mailchimpmeapp.herokuapp.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 5,
          name: "Clash of Clans of carousel",
          collab: "Kosidocs on Clash of Clans Carousel",
          image: require("@/assets/images/clans.png"),
          background: "#2c204a",
          githubUrl: "https://github.com/KOSIDOCS/Clash-of-Clans-Card",
          projectUrl: "https://kosidocs.github.io/Clash-of-Clans-Card/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 6,
          name: "Material-UI Calender web app",
          collab: "Kosidocs on Material Calender UI",
          image: require("@/assets/images/calender.png"),
          background: "#9d9ddc",
          githubUrl: "https://github.com/KOSIDOCS/calenderUI-App",
          projectUrl: "https://kosidocs.github.io/calenderUI-App/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 7,
          name: "Signup Form with ReactJS",
          collab: "Kosidocs on signup form with ReactJs",
          image: require("@/assets/images/signup.png"),
          background: "#a0b6da",
          githubUrl: "https://github.com/KOSIDOCS/React-axios-login-app",
          projectUrl: "https://kosidocs.github.io/React-axios-login-app/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 8,
          name: "Emirates Flight App with Flutter",
          collab: "Kosidocs on Flutter Mobile App",
          image: require("@/assets/images/emirates.png"),
          background: "#6e46bb",
          githubUrl: "https://github.com/KOSIDOCS/Emirates-Flight-Booking-App",
          projectUrl: "https://github.com/KOSIDOCS/Emirates-Flight-Booking-App",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 9,
          name: "Adiddas Shop Desktop App",
          collab: "Kosidocs on Flutter Desktop App",
          image: require("@/assets/images/desktop.png"),
          background: "#691bda",
          githubUrl: "https://github.com/KOSIDOCS/adidas-desktop-flutter-app",
          projectUrl: "https://github.com/KOSIDOCS/adidas-desktop-flutter-app",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
        {
          id: 10,
          name: "Express And Ejs full stack web App",
          collab: "Kosidocs on Express.JS and Ejs Web app",
          image: require("@/assets/images/todo.png"),
          background: "#beadff",
          githubUrl: "https://github.com/KOSIDOCS/Node-Ejs-TodoApp",
          projectUrl: "https://damp-ocean-77107.herokuapp.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
        },
      ],
    };
  },
};
</script>
