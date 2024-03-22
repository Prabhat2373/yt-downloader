// import { Tabs, rem } from "@mantine/core";
// import {
//   IconPhoto,
//   IconMessageCircle,
//   IconSettings,
// } from "@tabler/icons-react";
// import classes from "./Tabs.module.css";

// function TabsComponent() {
//   return (
//     <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
//       <Tabs.List grow>
//         <Tabs.Tab
//           value="settings"
//           leftSection={
//             <IconSettings style={{ width: rem(16), height: rem(16) }} />
//           }
//         >
//           Settings
//         </Tabs.Tab>
//         <Tabs.Tab
//           value="messages"
//           leftSection={
//             <IconMessageCircle style={{ width: rem(16), height: rem(16) }} />
//           }
//         >
//           Messages
//         </Tabs.Tab>
//         <Tabs.Tab
//           value="gallery"
//           leftSection={
//             <IconPhoto style={{ width: rem(16), height: rem(16) }} />
//           }
//         >
//           Gallery
//         </Tabs.Tab>
//       </Tabs.List>
//     </Tabs>
//   );
// }

// export default TabsComponent;

import { Center, rem, SegmentedControl } from "@mantine/core";
import classes from "./Tabs.module.css";
import {
  IconCode,
  IconExternalLink,
  IconEye,
  IconHeadphones,
  IconVideo,
} from "@tabler/icons-react";

function TabsComponent({ active, setActive }) {
  return (
    <SegmentedControl
      onChange={(value) => {
        console.log("value", value);
        setActive(value);
      }}
      radius="xl"
      size="md"
      //   data={["All", "AI/ML", "C++", "Rust", "TypeScript"]}
      data={[
        {
          value: "video",
          label: (
            <Center style={{ gap: 10 }}>
              <IconVideo style={{ width: rem(16), height: rem(16) }} />
              <span>Video</span>
            </Center>
          ),
        },
        {
          value: "audio",
          label: (
            <Center style={{ gap: 10 }}>
              <IconHeadphones style={{ width: rem(16), height: rem(16) }} />
              <span>Audio</span>
            </Center>
          ),
        },
      ]}
      classNames={classes}
    />
  );
}

export default TabsComponent;
