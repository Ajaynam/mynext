import React from "react";
import { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "5TechG",
  description: "This is Support page for Solid Pro",
};

const PortfolioPage = () => {
  return (
    <div className="pb-20 pt-40">
      < Portfolio/>
    </div>
  );
};

export default PortfolioPage;
