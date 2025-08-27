"use client";

import React, { useEffect } from "react";

interface BannerAdProps {
  adKey: string;
  width?: number;
  height?: number;
  id: string;
}

const BannerAd: React.FC<BannerAdProps> = ({ adKey, width = 300, height = 250, id }) => {
  useEffect(() => {
    // Load Adsterra script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.highperformanceformat.com/297ed86b29d181f660479ebab2f97717/invoke.js`;
    document.getElementById(id)?.appendChild(script);
  }, [adKey, id]);

  return (
    <div className="flex justify-center">
      {/* The ad will load inside this container */}
      <div id={id} style={{ width, height }} />
    </div>
  );
};

export default BannerAd;
