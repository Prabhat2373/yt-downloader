// import React from "react";
// import Loader from "../Loader";

// const AnimatedButton = ({ children, isLoading, ...props }) => {
//   return (
//     <button
//       className="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-blue-950 p-2  font-extrabold hover:bg-sky-700"
//       {...props}
//     >
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           {" "}
//           <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
//           <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
//           <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
//           <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
//           <p className="z-10 absolute bottom-2 left-2">{children}</p>
//         </>
//       )}
//     </button>
//   );
// };

// export default AnimatedButton;

import { Button, Loader } from "@mantine/core";
import React from "react";
// import Loader from "../../Loader";
import classes from "./Button.module.css";
const AnimatedButton = ({ children, isLoading, ...props }) => {
  return (
    // <button
    //   className="btn  disabled:bg-gray-500 disabled:cursor-not-allowed"
    //   {...props}
    // >
    //   {isLoading ? (
    //     <Loader color="gray" size="sm" />
    //   ) : (
    //     <div className="flex gap-1">
    //       {props?.icon ? <>{props?.icon}</> : null}

    //       <span className="text">{children}</span>
    //     </div>
    //   )}
    // </button>
    <Button
      variant="gradient"
      gradient={{ from: "pink", to: "yellow" }}
      // size="xl"
      className={classes.control}
      // mt={10}

      loading={isLoading}
      {...props}
    >
      {children}
      {/* GET LINK */}
    </Button>
  );
};

export default AnimatedButton;
