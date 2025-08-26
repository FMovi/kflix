"use client";

import Script from "next/script";

export default function Banner728x90() {
  return (
    <div className="flex justify-center my-4">
      {/* Container for the banner */}
      <div id="adsterra-banner-728x90" style={{ width: 728, height: 90 }} />

      {/* Adsterra Script */}
      <Script id="adsterra-banner-728x90-config" strategy="afterInteractive">
        {`
          atOptions = {
            'key' : '6551cbf85bccb8c248b360b96d7741d8',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `}
      </Script>
      <Script
        id="adsterra-banner-728x90-script"
        src="//www.highperformanceformat.com/6551cbf85bccb8c248b360b96d7741d8/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
