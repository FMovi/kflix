"use client";

import Script from "next/script";

export default function Banner300x250() {
  return (
    <div className="flex justify-center my-4">
      {/* Container for the ad */}
      <div id="adsterra-banner-300x250" style={{ width: 300, height: 250 }} />

      {/* Adsterra Config */}
      <Script id="adsterra-banner-300x250-config" strategy="afterInteractive">
        {`
          atOptions = {
            'key' : '297ed86b29d181f660479ebab2f97717',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300,
            'params' : {}
          };
        `}
      </Script>

      {/* Adsterra Script Loader */}
      <Script
        id="adsterra-banner-300x250-script"
        src="//www.highperformanceformat.com/297ed86b29d181f660479ebab2f97717/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
