<template>
  <Wrapper>
    <IntroMessage />
    <Mobile v-if="$vssWidth <= 992" :slides="slides" />
    <Desktop v-if="$vssWidth > 992" :components="slides" />
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import VueScreenSize from "vue-screen-size";

import Mobile from "./mobile/Mobile";
import Desktop from "./Desktop";

import IntroMessage from "@/components/shared/IntroMessage";

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

export default {
  components: {
    Wrapper,
    Mobile,
    Desktop,
    IntroMessage,
  },
  mixins: [VueScreenSize.VueScreenSizeMixin],
  data() {
    return {
      slides: [
        {
          id: 1,
          name: "Employee-Management-Web-App",
          collab: "Upwork Client (Employee Management Web App)",
          image: require("@/assets/images/worktrim.png"),
          background: "#4f57ad",
          skills: [
            require("@/assets/techlogos/bootstrap.png"),
            require("@/assets/techlogos/node.png"),
            require("@/assets/techlogos/stripe.svg"),
            require("@/assets/techlogos/google-map.png"),
            require("@/assets/techlogos/formik.png"),
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/redux-logo.png"),
            require("@/assets/techlogos/material-ui-logo.png"),
            require("@/assets/techlogos/swagger-logo.png"),
            require("@/assets/techlogos/axios.png"),
          ],
          githubUrl: "https://www.worktrim.com/",
          projectUrl: "https://www.worktrim.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "An Enterprise employee management web application to help Schedule, monitor and Manage Employee work effort all from one spot.",
          technology:
            "Worktrim is built using ReactJS, with a Java backend and Swagger for handling API requests, and runs on live platform. Payments are handled via Stripe, Material UI and Bootstrap3 is the CSS framework of choice for this project",
        },
        {
          id: 2,
          name: "Meow Job Board Platform",
          collab: "kosidocs on JobBoard Platform",
          image: require("@/assets/images/meow.png"),
          background: "#1E064B",
          skills: [
            require("@/assets/techlogos/styled.png"),
            require("@/assets/techlogos/polished.png"),
            require("@/assets/techlogos/bootstrap.png"),
            require("@/assets/techlogos/node.png"),
            require("@/assets/techlogos/adzuna.jpeg"),
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/redux-logo.png"),
            require("@/assets/techlogos/heroku.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/axios.png"),
            require("@/assets/techlogos/sass.svg"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/meowjobapp",
          projectUrl: "https://meowjobapp.herokuapp.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A job platform web application to help Search for jobs, save favorite, recieve new job notification and reduce the stress of looking for job for software developers with aesthetic ui.",
          technology:
            "Meow is built using ReactJS, with a NodeJS backend for handling API requests, Github Job API and Adzuna Job API for accessing jobs, and runs on Heroku. Styled Component, Polished, SCSS, and Bootstrap3 is the CSS framework of choice for this project",
        },
        {
          id: 3,
          name: "Honor SmartWatch Landing Page",
          collab: "Kosidocs on Honor SmartWatch Landing Page",
          image: require("@/assets/images/smartwatch.png"),
          background: "#65A9CD",
          skills: [
            require("@/assets/techlogos/styled.png"),
            require("@/assets/techlogos/polished.png"),
            require("@/assets/techlogos/bootstrap.png"),
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/sass.svg"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/honor-smartwatch",
          projectUrl: "https://kosidocs.github.io/honor-smartwatch/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A landing page for honor smartwatch product display, varient image slider, mobile responsive, dark theme and light theme product display.",
          technology:
            "Honor Smartwatch is built using ReactJS, and runs on Github pages. Styled Component, Polished, SCSS, Bootstrap, and react-bootstrap is the CSS framework of choice for this project",
        },
        {
          id: 4,
          name: "Gmail and Mailchimp Contact form",
          collab: "Kosidocs on Mailchimp and Gmail Contact Form",
          image: require("@/assets/images/form.png"),
          componentProps: { buttonId: "list-ripple" },
          background: "#354286",
          skills: [
            require("@/assets/techlogos/styled.png"),
            require("@/assets/techlogos/polished.png"),
            require("@/assets/techlogos/bootstrap.png"),
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/sass.svg"),
            require("@/assets/techlogos/nodemailer-logo.png"),
            require("@/assets/techlogos/express.png"),
            require("@/assets/techlogos/axios.png"),
            require("@/assets/techlogos/mailchimp.png"),
            require("@/assets/techlogos/node.png"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/contact-us-form",
          projectUrl: "https://mailchimpmeapp.herokuapp.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A contact form web app for submitting user enquiries, user product needs, add user details to mailchimp database, sending user enquiries to gmail account.",
          technology:
            "Contact Us Form is built using ReactJS, with a Node backend, Mailchimp marketing API and Google Gmail to save user details, messages and runs on Heroku. Styled Component, Polished, SCSS, Bootstrap, and react-bootstrap is the CSS framework of choice for this project",
        },
        {
          id: 5,
          name: "Clash of Clans of carousel",
          collab: "Kosidocs on Clash of Clans Carousel",
          image: require("@/assets/images/clans.png"),
          background: "#2c204a",
          skills: [
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/sass.svg"),
            require("@/assets/techlogos/jquery.png"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/Clash-of-Clans-Card",
          projectUrl: "https://kosidocs.github.io/Clash-of-Clans-Card/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A 3D photo card slider display of warrior character website. The images are showcased in a story mode with each character details and strength.",
          technology:
            "Clash of clans cards is built using ReactJS, with a Jquery, slick-carousel, react-slick, and react-animated-slider, and runs on Github pages. CSS, SCSS, Normalize.css is the CSS framework of choice for this project",
        },
        {
          id: 6,
          name: "Material-UI Calender web app",
          collab: "Kosidocs on Material Calender UI",
          image: require("@/assets/images/calender.png"),
          background: "#9d9ddc",
          skills: [
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/material-ui-logo.png"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/calenderUI-App",
          projectUrl: "https://kosidocs.github.io/calenderUI-App/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A material UI calender web app is built to showcase the power of card design system. Each UI component is displayed in a card pattern with a smooth and user friendly layout. The project is not built with mobile responsive, it's built with desktop users in mind.",
          technology:
            "Calender web app is built using ReactJS, and runs on Github pages. Material UI is the CSS framework of choice for this project",
        },
        {
          id: 7,
          name: "Signup Form with ReactJS",
          collab: "Kosidocs on signup form with ReactJs",
          image: require("@/assets/images/signup.png"),
          background: "#a0b6da",
          skills: [
            require("@/assets/techlogos/material-ui-logo.png"),
            require("@/assets/techlogos/bootstrap.png"),
            require("@/assets/techlogos/react.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/axios.png"),
            require("@/assets/techlogos/sass.svg"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/React-axios-login-app",
          projectUrl: "https://kosidocs.github.io/React-axios-login-app/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A Sign-up form validation web app, with each field sanitized of any injection, null value. The fields can only be valid when the right data is typed in, a user friendly error message is displayed and the Sign-in button is shown to the user when all the fields is validated. The project is built with mobile responsive, also with desktop users in mind.",
          technology:
            "Sign-up web app is built using ReactJS, with isemail and zxcvbn for input fields validation, and Axios for form processing, and runs on Github pages. Material UI, and Bootstrap is the CSS framework of choice for this project",
        },
        {
          id: 8,
          name: "Emirates Flight App with Flutter",
          collab: "Kosidocs on Flutter Mobile App",
          image: require("@/assets/images/emirates.png"),
          background: "#6e46bb",
          skills: [
            require("@/assets/techlogos/flutter.png"),
            require("@/assets/techlogos/ios.png"),
            require("@/assets/techlogos/android.jpeg"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/figma.png"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/Emirates-Flight-Booking-App",
          projectUrl: "https://github.com/KOSIDOCS/Emirates-Flight-Booking-App",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "An Android and iOS prototype application for Emirates Airline flight booking. Customers can quickly and easily book flight to their desired destinations, see available seats, pay with Paypal, Ipay, and Wallet.",
          technology:
            "Emirates Flight App is built on the Flutter platform that uses the Dart language and Flutter framework to build cross-platform mobile applications. The design by Sajon is made with Figma.",
        },
        {
          id: 9,
          name: "Adidas Shop Desktop App",
          collab: "Kosidocs on Flutter Desktop App",
          image: require("@/assets/images/desktop.png"),
          background: "#691bda",
          skills: [
            require("@/assets/techlogos/flutter.png"),
            require("@/assets/techlogos/mac.svg"),
            require("@/assets/techlogos/window.png"),
            require("@/assets/techlogos/linux.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/figma.png"),
            require("@/assets/techlogos/adidas.svg"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/adidas-desktop-flutter-app",
          projectUrl: "https://github.com/KOSIDOCS/adidas-desktop-flutter-app",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A Linux desktop App, Window desktop App and MacOS desktop App prototype application for Adidas Shop. Customers can quickly and easily see product variant, search product directory, see available products, pay with online payment options.",
          technology:
            "Adidas Shop Dektop App is built on the Flutter platform that uses the Dart language and Flutter framework to build cross-platform desktop applications.",
        },
        {
          id: 10,
          name: "Multi List Page Todo Web App",
          collab: "Kosidocs on Multi List Page Todo Web App",
          image: require("@/assets/images/todo.png"),
          background: "#beadff",
          skills: [
            require("@/assets/techlogos/bootstrap.png"),
            require("@/assets/techlogos/jquery.png"),
            require("@/assets/techlogos/github.png"),
            require("@/assets/techlogos/heroku.png"),
            require("@/assets/techlogos/ejs.png"),
            require("@/assets/techlogos/node.png"),
            require("@/assets/techlogos/express.png"),
            require("@/assets/techlogos/lodash.png"),
            require("@/assets/techlogos/mongoose.png"),
            require("@/assets/techlogos/mongo.png"),
          ],
          githubUrl: "https://github.com/KOSIDOCS/Node-Ejs-TodoApp",
          projectUrl: "https://damp-ocean-77107.herokuapp.com/",
          upwork:
            "https://www.upwork.com/o/profiles/users/~01c3c2c2d383ed5578/?s=1110580755107926016",
          details:
            "A multi List page Todo web application. Users can quickly and easily create custom Todo List pages with same template, add tasks to the created Todo List page, delete tasks from Todo List page.",
          technology:
            "Multi List Page Todo Web App is built on Ejs template engine, with NodeJS and Express backend, MongoDB and Mongoose for database and database model, and runs on Heroku. Bootstrap is the CSS framework of choice for this project",
        },
      ],
    };
  },
};
</script>
