"use client";

import {
  Image,
  Accordion,
  Grid,
  Container,
  Title,
  Box,
  Flex,
} from "@mantine/core";
import image from "../../app/assets/faq.bg.svg";
import classes from "./Faq.module.css";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export function FaqComponent() {
  return (
    <Flex style={{ minHeight: "100vh" }} justify="center" align="center">
      <Box mt={30} className={classes.wrapper}>
        <Container size="lg">
          <Grid id="faq-grid" gutter={50}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={image.src} alt="Frequently Asked Questions" />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} ta="left" className={classes.title}>
                Frequently Asked Questions
              </Title>

              <Accordion
                chevronPosition="right"
                defaultValue="reset-password"
                variant="separated"
              >
                <Accordion.Item className={classes.item} value="reset-password">
                  <Accordion.Control>Is Fast4k free to use?</Accordion.Control>
                  <Accordion.Panel>
                    Yes, Fast4k is completely free to use for converting YouTube
                    videos to MP4 and MP3 formats. There are no hidden fees or
                    subscriptions required.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                  className={classes.item}
                  value="another-account"
                >
                  <Accordion.Control>
                    What video quality does Fast4k support?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Fast4k supports various video qualities, including standard
                    resolutions like 480p, 720p, and 1080p, as well as higher
                    resolutions like 4K and even 8K, depending on the source
                    video's availability on YouTube.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="free_to_use">
                  <Accordion.Control>
                    Is Fast4k safe and secure to use?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Yes, Fast4k is designed with user safety in mind. We do not
                    require any software installation or personal information
                    from users. Your privacy and security are our priorities.
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className={classes.item} value="newsletter">
                  <Accordion.Control>
                    Can Fast4k download videos in high-resolution formats like
                    4K or 8K?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Yes, Fast4k supports downloading videos in high-resolution
                    formats such as 4K and 8K if the original video on YouTube
                    is available in these qualities.
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                  <Accordion.Control>
                    Is there a limit to the number of videos I can download with
                    Fast4k?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Fast4k does not impose any limits on the number of videos
                    you can download. You can use Fast4k as often as you like,
                    free of charge.
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </Flex>
  );
}
