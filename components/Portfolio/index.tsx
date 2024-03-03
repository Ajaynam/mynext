"use client"
import { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioData from "./PortfolioData";
import { motion } from "framer-motion";

const Portfolio = () => {
    const [currentTab, setCurrentTab] = useState("All");

    const handleTabClick = (tab) => {
        setCurrentTab(tab);
    };

    const filteredPortfolio = currentTab === "All" ? PortfolioData : PortfolioData.filter(item => item.category === currentTab);

    return (
        <>
            <section className="relative pb-20 lg:pb-22.5">
                <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <h4 className="mb-4.5 text-lg font-medium text-rose">
                        Our Projects
                    </h4>
                    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">Some of our finest work</h1>
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
                    >
                        <div
                            onClick={() => handleTabClick("All")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "All" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
                                }`}
                        >
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    All Works
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() => handleTabClick("mobileapp")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "mobileapp" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
                                }`}
                        >
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    Mobile Apps
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() => handleTabClick("webapp")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "webapp" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
                                }`}
                        >
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    Web Apps
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() => handleTabClick("logo")}
                            className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${currentTab === "logo" ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary" : ""
                                }`}
                        >
                            <div className="md:w-3/5 lg:w-auto">
                                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                                    Logos
                                </button>
                            </div>
                        </div>



                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -20,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                            },
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="animate_top mx-auto max-w-c-1154"
                    >
                        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
                            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                                {filteredPortfolio.map((portfolio, key) => (
                                    <PortfolioItem portfolio={portfolio} key={key} />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
