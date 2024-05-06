"use client";
import { Container, Flex, List, Text, Title } from "@mantine/core";
import React from "react";

const PrivacyPolicyContainer = () => {
  return (
    <div>
      <Container my={40}>
        <Flex direction={"column"} gap={40}>
          <Flex direction={"column"} gap={10}>
            <Title>Privacy Policy</Title>
            <Text>
              Fast4K is committed to protecting the privacy of its users. This
              Privacy Policy explains how we collect, use, and safeguard your
              personal information when you visit our website and use our
              services.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Title>Information We Collect</Title>
            <Text>
              When you visit Fast4K, we do not collect any personally
              identifiable information such as your name, email address, or
              other personal details. The only information we may receive and
              process is the YouTube video link you provide to download.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Title>Use of Information</Title>
            <Text>
              The YouTube video link you input is solely used to enable the
              download functionality on our website. We do not store, share, or
              use this information for any other purpose. Additionally, we do
              not use cookies or any tracking technologies on our website.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Title>Third-Party Services</Title>
            <Text>
              Fast4K displays Google Ads on our website. These ads are served by
              Google and may use cookies to display relevant advertisements
              based on users' browsing history. Please refer to Google's Privacy
              Policy for more information about how Google handles user data.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Title>External Links</Title>
            <Text>
              Our website may contain links to external sites that are not
              operated by us. Please be aware that we have no control over the
              content and practices of these sites and cannot accept
              responsibility or liability for their respective privacy policies.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Title>Changes to This Privacy Policy</Title>
            <Text>
              We reserve the right to update or change our Privacy Policy at any
              time. Any modifications will be effective immediately upon posting
              on this page.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={10}>
            <Title>Contact Us</Title>
            <Text>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at
              <a href="mailto:fast4k2373@gmail.com">fast4k2373@gmail.com</a>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default PrivacyPolicyContainer;
