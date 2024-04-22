import { FaqComponent } from "@/components/app/Faq";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Fast4k",
  description:
    "See Frequently Asked Quastion About downloading youtube videos online.",
};
const FaqPageIndex = () => {
  return <FaqComponent />;
};

export default FaqPageIndex;
