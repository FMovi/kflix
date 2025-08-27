"use client";

import React, { useEffect } from "react";

interface BannerAdProps {
  adKey: string;
  width?: number;
  height?: number;
  id: string;
}

const BannerAd: React.FC<BannerAdProps> = ({ adKey, width = 728, height = 90, id }) => {
  useEffect(() => {
    // Load Adsterra script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pl${adKey}.adsterra.com/${id}/invoke.js`;
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
