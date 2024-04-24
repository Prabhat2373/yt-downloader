"use client";

import { Container, Text, Title } from "@mantine/core";
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
        <Title className={classes.title}>
          Empower Your Media Journey <br /> Download{" "}
          <Text
            component="span"
            // gradient={{ from: "#734AEB", to: "#ed5bff" }}
            // gradient={{ from: "#e_e2a7b", to: "#6_228d7" }}
            gradient={{ from: "#EA00FE", to: "#6135E9" }}
            // className={classes.highlight}
            inherit
            variant="gradient"
          >
            Youtube Videos
          </Text>{" "}
          Effortlessly!
        </Title>

        <Container p={0} size={1000}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Unlock endless entertainment! Download Youtube Videos Online and
            MP3s in High Quality with a single click. <br /> Fast4k—the fastest
            way to elevate your media experience!
          </Text>
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
