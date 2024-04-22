// import { useState } from "react";
// import { Dialog } from "@headlessui/react";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

// export default function Hero({ children }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       <div className="opacity-80">
//         <div className="hero-pattern "></div>
//       </div>
//       <div className="absolute opacity-65 bottom-0 right-0 w-[600px] h-[450px]">
//         <div className="hero-pattern "></div>
//       </div>
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//           // className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           // style={{
//           //   clipPath:
//           //     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//           // }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-56">
//           <div className=" flex-col hidden sm:mb-8 sm:flex sm:justify-center">
//             <h1 className="text-6xl font-semibold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
//               Download Youtube Videos in <br /> Highest Quality{" "}
//             </h1>
//           </div>
//           {children}
//         </div>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { Title, Text, Button, Container } from "@mantine/core";
// import { Dots } from "./Dots";
import classes from "./Hero.module.css";
import { Dots } from "../ui/Dots";
import BgGrid from "./BgGrid";

function Hero({ children }) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />
      <div className="app_background ">
        <div className="app_bg_texture"></div>
      </div>
      {/* <BgGrid /> */}
      <div className={classes.inner}>
        <Title className={classes.title}>
          Empower Your Media Journey <br /> Download{" "}
          <Text
            component="span"
            // gradient={{ from: "#734AEB", to: "#ed5bff" }}
            gradient={{ from: "#ee2a7b", to: "#6228d7" }}
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
            Unlock endless entertainment! Download Youtube Videos and MP3s in
            High Quality with a single click. <br /> Fast4k—the fastest way to
            elevate your media experience!
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
