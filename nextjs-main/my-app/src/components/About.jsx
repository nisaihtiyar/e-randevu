"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Uzmanlık",
    id: "uzmanlik",
    content: (
      <ul className="list-disc pl-2">
        <li>Genel Cerrahi</li>
        <li>Organ Nakli</li>
        <li>Zayıflama</li>
        
        
        
      </ul>
    ),
  },
  {
    title: "Eğitim",
    id: "egitim",
    content: (
      <ul className="list-disc pl-2">
        <li>Atatürk Üniversitesi Tıp Fakültesi, Tıp Eğitimi</li>
        <li>İstanbul Üniversitesi Tıp Fakültesi - Uzmanlık</li>
      </ul>
    ),
  },
  {
    title: "Bilimsel Yayınlar",
    id: "yayin",
    content: (
      <ul className="list-disc pl-2">
        <li>137 Makale ve 230 Bildiri</li>
        <li>Uluslararası Dergilerde Yayımlanan Makale Sayısı: 111 ( 78'i birinci isim veya sorumlu yazar )</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("uzmanlik");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/doktor1.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">Hakkımda</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptatum perferendis praesentium, error veniam quasi ullam
            explicabo nisi quam quos aliquam pariatur totam tempore odio numquam 
            perspiciatis! Impedit facilis expedita maiores. Lorem ipsum, dolor sit amet 
            consectetur adipisicing elit. Accusantium ex a, quae, eos quia iusto dolorum ab 
            velit fugiat inventore nesciunt assumenda. Tenetur necessitatibus veritatis
            earum atque cupiditate sunt laborum.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("uzmanlik")}
              active={tab === "uzmanlik"}
            >
              {" "}
              Uzmanlık{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("egitim")}
              active={tab === "egitim"}
            >
              {" "}
              Eğitim{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("yayin")}
              active={tab === "yayin"}
            >
              {" "}
              Bilimsel Yayınlar{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;