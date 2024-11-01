import React from "react";
import IndustryCard from "../../components/IndustryPage/IndustryCard/IndustryCard";
import EngineerCard from "../../components/IndustryPage/EngineerCard/EngineerCard";
import { PiGearLight } from "react-icons/pi";
import { GoLightBulb } from "react-icons/go";
import { FaHelmetSafety } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

function Industries() {
  return (
    <>
      <IndustryCard
        img="/industryPage/1.jpg"
        firstWord="Architecture and"
        secondWord="urban planning"
        p="Mosaic Holding Corporation is deeply embedded in the architectural landscape. This division covers a broad spectrum of architectural services, from conceptual design and master planning to project execution. MHC leverages its expertise in this sector to foster innovation in both commercial and residential projects, blending creative vision with practicality. In 2024, the global architecture industry is valued at approximately $410 billion, driven by urbanisation, sustainable design trends, and technological integration, and stock values in architecture firms have seen steady growth, with an average increase of 6-8% annually."
        icon={GoLightBulb}
      />
      <EngineerCard />
      <IndustryCard
        img="/industryPage/3.jpg"
        firstWord="Oil and"
        secondWord="gas"
        type="horizontal"
        p="The oil and gas industry remains one of the largest and most volatile, with a global market size of $4.5 trillion in 2024. Despite the energy transition toward renewables, the demand for oil and gas continues to dominate, driven by industrial, transportation, and energy needs. Mosaic Holding Corporation’s involvement in this sector aligns with its strategic interest in energy management and marine structures."
        icon={FaHelmetSafety}
      />
      <IndustryCard
        img="/industryPage/3.jpg"
        firstWord="Marine and offshore"
        secondWord="structures"
        p="Mosaic Holding Corporation brings specialized expertise in the design and development of marine and offshore structures. for the oil, gas, and renewable energy sectors, is valued at $128 billion in 2024. This industry includes projects like offshore wind farms, oil rigs, and port developments. Market drivers include the expansion of 
renewable energy initiatives (offshore wind) and the ongoing global demand for oil and gas."
        icon={HiOutlineWrenchScrewdriver}
      />
      <IndustryCard
        img="/industryPage/3.jpg"
        firstWord="Energy "
        secondWord="Management"
        p="Mosaic Holding Corporation supports industries in managing their energy needs through sustainable and cost
-efficient strategies. The industry has seen significant growth in 2024, with a global market value exceeding $46 billion. This division focuses on optimizing energy consumption in various sectors, implementing advanced 
technologies for energy storage, distribution, and generation. Whether through renewable energy integration or the enhancement of existing energy systems, MHC provides cutting-edge solutions to ensure efficient energy use and reduce environmental impact."
        icon={PiGearLight}
      />
    </>
  );
}

export default Industries;
