"use client";

import { Badge, Container, Text, Title } from "@mantine/core";
// import { Dots } from "./Dots";
import { Dots } from "../ui/Dots";
import classes from "./Hero.module.css";

function Hero({ children }) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      {/* <BgGrid /> */}
      <div className={classes.inner}>
        <Title
          className={classes.title}
          title="Streamline Your Media Experience: Download YouTube Videos with Ease!"
        >
          Streamline Content Creating <br /> Download{" "}
          <Text
            component="span"
            // gradient={{ from: "#734AEB", to: "#ed5bff" }}
            // gradient={{ from: "#e_e2a7b", to: "#6_228d7" }}
            gradient={{ from: "#EA00FE", to: "#6135E9" }}
            // className={classes.highlight}
            inherit
            variant="gradient"
          >
            YouTube Videos
          </Text>{" "}
          with Ease!
        </Title>

        <Container p={0} size={1000} className={classes.description}>
          {/* <Text size="lg" c="dimmed" > */}
          {/* Unlock endless entertainment! Download Youtube Videos Online and
            MP3s in High Quality with a single click. <br /> Fast4k—the fastest
            way to elevate your media experience! */}
          <Badge variant="dot" autoContrast>
            Fast4k: Unlock endless entertainment with high-quality downloads!
          </Badge>
          {/* </Text> */}
        </Container>

        <div className="hero_content_container box_grid_pattern">
          {children}
        </div>
        {/* <div
          style={{
            right: "75%",
            position: "absolute",
            bottom: "100px",
            opacity: "40%",
          }}
        > */}

        {/* </div> */}
      </div>
    </Container>
  );
}

export default Hero;
