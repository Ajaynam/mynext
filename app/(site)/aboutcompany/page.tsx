import React from "react";
import { Metadata } from "next";
import AboutCompany from "@/components/AboutCompany";

export const metadata: Metadata = {
  title: "5TechG",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const AboutCompanyPage = () => {
  return (
    <div className="pb-20 pt-40">
      <AboutCompany />
    </div>
  );
};

export default AboutCompanyPage;
