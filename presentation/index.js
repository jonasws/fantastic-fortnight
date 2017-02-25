// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import SurpriseHeader from "./SurpriseHeader";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});



const Presentation = () =>
  <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
    <Slide bgColor="primary">
      <Heading size={1} fit caps lineHeight={1} textColor="secondary">webpack 2</Heading>
      <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>Verktøyet over alle verktøy</Text>
    </Slide>

    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={4} textColor="secondary">Static stuff "through the ages"</Heading>
      <List>
        <Appear><ListItem>Ingen bundling</ListItem></Appear>
        <Appear><ListItem>Shell-skript</ListItem></Appear>
        <Appear><ListItem>grunt, gulp</ListItem></Appear>
      </List>
    </Slide>

    <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>if you can't do without tools you are not a web developer</Quote>
        <Cite>Peter-Paul Koch</Cite>
      </BlockQuote>
    </Slide>

    <Slide>
      <SurpriseHeader />
    </Slide>

  </Deck>;

export default Presentation;
