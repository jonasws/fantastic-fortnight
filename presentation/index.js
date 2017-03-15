// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
/* import preloader from "spectacle/lib/utils/preloader";*/

// Import theme
import createTheme from "spectacle/lib/themes/default";

import SurpriseHeader from "./surprise-header";
import { DiscoHeading } from "./disco-slide";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


/* const images = {
 *   city: require("../assets/city.jpg"),
 *   kat: require("../assets/kat.png"),
 *   logo: require("../assets/formidable-logo.svg"),
 *   markdown: require("../assets/markdown.png")
 * };
 *
 * preloader(images);*/

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
  <Deck transition={["zoom", "slide"]} transitionDuration={600} theme={theme}>
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

    <Slide transiton={["slide"]}>
      <SurpriseHeader />
    </Slide>

    <Slide>
      <Text>Ymse => JavaScript => Ymse</Text>
    </Slide>

    <Slide>
      <List>
        <ListItem>Entry</ListItem>
        <ListItem>Output</ListItem>
        <ListItem>Loaders</ListItem>
        <Appear>
          <ListItem>(Plugins)</ListItem>
        </Appear>
      </List>
    </Slide>

    <Slide>
      <CodePane textSize="2rem" lang="js" source={require("raw-loader!./examples/entry.js.example")}/>
    </Slide>

    <Slide>
      <CodePane textSize="2rem" lang="js" source={require("raw-loader!./examples/output.js.example")}/>
    </Slide>

    <Slide align="flex-start">
      <CodePane style={{ overflowY: "scroll", maxHeight: "100%" }} textSize="1.3rem" lang="js" source={require("raw-loader!./examples/loaders.js.example")}/>
    </Slide>

    <Slide align="flex-start">
      <CodePane style={{ overflowY: "scroll", maxHeight: "100%" }} textSize="1.3rem" lang="js" source={require("raw-loader!./examples/rules.js.example")}/>
    </Slide>

    <Slide bgColor="secondary">
      <Heading textColor="primary" lineHeight={1.5}>"Building for production"</Heading>
    </Slide>

    <Slide>
      <Heading size={3}>ExtractTextWebpackPlugin</Heading>
      <Text margin="2rem">Putter all css i en egen fil</Text>
    </Slide>

    <Slide transition={[]}>
      <DiscoHeading>Code splitting</DiscoHeading>
    </Slide>

    <Slide>
      <List>
        <ListItem>"Lazy loading" på frontend</ListItem>
        <ListItem>Utnytter asynkroniteten i nettleserne</ListItem>
        <ListItem>Kan forbedre lasttid i komplekse applikasjoner</ListItem>
      </List>
    </Slide>

    <Slide>
      <Heading size={2}>import-funksjonen</Heading>
      <List>
        <ListItem>Returnerer et promise som resolver til den gitte modulen</ListItem>
        <Appear>
          <ListItem>Går superbra i hånd med async + await!</ListItem>
        </Appear>
      </List>
    </Slide>

    <Slide>
      <CodePane textSize="2rem" lang="js" source={require("raw-loader!./examples/import-function.js.example")}/>
    </Slide>

    <Slide>
      <Heading size={2}>Tree shaking</Heading>
    </Slide>

    <Slide bgColor="secondary">
      <Heading textColor="primary">Spørsmål?</Heading>
    </Slide>
  </Deck>;

export default Presentation;
