"use client";

import { useState, useEffect, useRef } from "react";
import { initialTabs as tabs } from "./Tabs";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "@/app/globals.css";

export default function Skill() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null); // Referensi untuk section 2

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      // Jika section 2 masuk ke dalam viewport, set state untuk memulai animasi
      if (isVisible) {
        setIsSectionVisible(true);
        window.removeEventListener("scroll", handleScroll); // Hapus event listener setelah selesai
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDisplayedText = (tab) => {
    switch (tab.label) {
      case "Front":
        return (
          <>
            <div className="px-14 flex flex-col gap-4 leading-7">
              <h1 className="text-xl">
                {isSectionVisible && (
                  <TypeAnimation
                    className="type"
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "mengambangkan dan memelihara bagian depan suatu website\nMengimplementasikan design ke dalam sebuah code\nmemahami dengan baik design web juga mengimplementasikan UI/UX\n",
                      1000,
                    ]}
                    speed={80}
                    style={{ whiteSpace: "pre-line" }}
                    repeat={0}
                  />
                )}
              </h1>
            </div>
          </>
        );
      case "Back":
        return (
          <>
            <div className="px-14 flex flex-col gap-4 leading-7">
              <h1 className="text-lg">
                {isSectionVisible && (
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed once, initially
                      "Merancang dan mengembangkan website dari sisi server\nbertujuan memastikan suatu website dapat berjalan dengan aman\nmengola basis data serta mengatur integrasi API",
                      1000,
                    ]}
                    speed={80}
                    style={{ whiteSpace: "pre-line" }}
                    repeat={0}
                  />
                )}
              </h1>
            </div>
          </>
        );
      default:
        return "Teks default jika tidak ada tab yang dipilih.";
    }
  };

  return (
    <div className="h-screen bg-[#004977] flex items-center justify-center">
      <div className="window w-[60%] h-[80%] rounded-xl bg-black text-white overflow-hidden shadow-neutral-900 shadow-xl flex flex-col">
        <nav className="text-black">
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main ref={sectionRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.icon : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {getDisplayedText(selectedTab)}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// Email token re_ecPbGvNb_79dyMY7817NYkLn3fTwsdxGR
