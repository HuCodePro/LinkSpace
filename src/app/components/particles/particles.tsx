"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ParticlesUI from "@/app/components/ui/particles"; // Mettez à jour selon le chemin correct

const ParticlesComponent = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  console.log("Current Theme:", theme); // Debugging pour vérifier le thème
  console.log("Particle Color:", color); // Debugging pour vérifier la couleur

  return (
    <div className="absolute z-50">
      <ParticlesUI
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};

export default ParticlesComponent;
