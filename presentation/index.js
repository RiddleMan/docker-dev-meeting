// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  dockerLogo: require("../assets/moby.svg"),
  sampleApp: require("../assets/sample-app.png"),

  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#52b2e4"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="number">
          <Slide>
            <Image src={images.dockerLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={1} caps textColor="white">
              Docker
            </Heading>
            <Heading size={4} caps textColor="white">
              Artur Ptaszek
            </Heading>
            <Heading size={6} caps textColor="white">
              @Synergy Codes
            </Heading>
            <Heading size={6} textColor="white">
              29.08.2016r.
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              What is Docker?
            </Heading>
            <List>
              <Appear><ListItem>Alpine Linux based (only 85MB)/Window Server Core (not that light :P)</ListItem></Appear>
              <Appear><ListItem>Light Virtualization Technology</ListItem></Appear>
              <Appear><ListItem>Container solution</ListItem></Appear>
              <Appear><ListItem>Works on Linux, OS X, Windows</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              Why?
            </Heading>
            <List>
              <Appear><ListItem>DevOps</ListItem></Appear>
              <Appear><ListItem>Microservices</ListItem></Appear>
              <Appear><ListItem>Lighter than VM</ListItem></Appear>
              <Appear><ListItem>"Production" infrastructure on your computer</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              Docker tools
            </Heading>
            <List>
              <Appear><ListItem>Docker Hub</ListItem></Appear>
              <Appear><ListItem>Docker Machine</ListItem></Appear>
              <Appear><ListItem>Docker Compose</ListItem></Appear>
              <Appear><ListItem>Docker Swarm</ListItem></Appear>
              <Appear><ListItem>Docker Toolbox</ListItem></Appear>
              <Appear><ListItem>Docker Cloud</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              THE APP
            </Heading>
            <Image src={images.sampleApp.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              THE APP
            </Heading>
            <List>
              <Appear><ListItem>Frontend: ReactJS</ListItem></Appear>
              <Appear><ListItem>Backend: NodeJS</ListItem></Appear>
              <Appear><ListItem>DB: Mongo + maybe ElasticSearch</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              THE APP
            </Heading>
            <Heading size={3} textColor="white">
              problems
            </Heading>
            <List>
              <Appear><ListItem>How to deploy to Cloud?</ListItem></Appear>
              <Appear><ListItem>How to debug "production" environment?</ListItem></Appear>
              <Appear><ListItem>How to scale?</ListItem></Appear>
              <Appear><ListItem>What if I want to create microservices?</ListItem></Appear>
              <Appear><ListItem>What if I have already built base environment?</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} caps>
              THE APP
            </Heading>
            <Heading size={3} textColor="white">
              structure
            </Heading>
            <CodePane source={`
              client/Dockerfile
              client/.dockerignore
              server/Dockerfile
              server/.dockerignore
              docker-compose.yml
            `}
            />
          </Slide>

          <CodeSlide
            transition={[]}
            lang="docker"
            code={require("raw!../assets/client-Dockerfile")}
            ranges={[
              { loc: [0, 14], title: "Frontend Dockerfile" },
              { loc: [0, 1], title: "Base image" },
              { loc: [3, 4], title: "Workdir" },
              { loc: [6, 7], title: "Copy" },
              { loc: [8, 10], title: "Build" },
              { loc: [11, 12], title: "Ports" },
              { loc: [12, 13], title: "Command" }
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="docker"
            code={require("raw!../assets/server-Dockerfile")}
            ranges={[
              { loc: [0, 14], title: "Backend Dockerfile" },
              { loc: [0, 1], title: "Base image" },
              { loc: [3, 4], title: "Workdir" },
              { loc: [5, 6], title: "Copy" },
              { loc: [6, 7], title: "Package installation" },
              { loc: [9, 10], title: "Ports" },
              { loc: [10, 11], title: "Command" }
            ]}
          />

          <Slide bgColor="black">
            <Heading size={1} textColor="white">
              Building first image
            </Heading>
            <Heading size={2} fit textColor="white" textFont="Monospace" margin="50px 0px">
              docker build -t our-first-docker-app .
            </Heading>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1} textColor="white">
              Running first container
            </Heading>
            <Heading size={2} fit textColor="white" textFont="Monospace" margin="50px 0px">
              docker run -p 8080:8080 our-first-docker-app
            </Heading>
          </Slide>

          <Slide bgColor="black">
            <Heading size={1} textColor="white">
              Debugging first container
            </Heading>
            <Heading size={2} fit textColor="white" textFont="Monospace" margin="50px 0px">
              docker run -it our-first-docker-app /bin/bash
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps fit>
              Docker compose
            </Heading>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="yaml"
            code={require("raw!../assets/docker-compose.yml")}
            ranges={[
              { loc: [0, 100], title: "Docker Compose" },
              { loc: [22, 100], title: "Database" },
              { loc: [12, 22], title: "Backend" },
              { loc: [2, 11], title: "Frontend" }
            ]}
          />

          <Slide bgColor="black">
            <Heading size={1} textColor="white">
              Running docker-compose
            </Heading>
            <Heading size={2} fit textColor="white" textFont="Monospace" margin="50px 0px">
              docker-compose up
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps fit>
              Dzięki :)
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
