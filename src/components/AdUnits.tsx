import React, { useEffect, useRef, useState } from "react";

/**
 * Global Social Bar Ad Component
 * Injects the Adsterra Social Bar script once globally.
 */
export const SocialBarAd: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if already injected
    const existingScript = document.querySelector(
      'script[src*="a9b3468f79bf1a5106aa81f09e11ebb1.js"]'
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.src = "https://pl30412620.effectivecpmnetwork.com/a9/b3/46/a9b3468f79bf1a5106aa81f09e11ebb1.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    return () => {
      // Keep running globally
    };
  }, []);

  return null;
};

/**
 * Banner 728x90 Component (Desktop Header Banner)
 */
export const Banner728x90: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = "728";
    iframe.height = "90";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    iframe.scrolling = "no";
    
    // Check if iframe loading gets blocked
    iframe.addEventListener("error", () => {
      setCollapsed(true);
    });

    containerRef.current.appendChild(iframe);

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; min-height: 90px; background: transparent; }
              </style>
            </head>
            <body>
              <script type="text/javascript">
                var atOptions = {
                  'key' : 'ee0ceef4c63460d05357afd04f32beb7',
                  'format' : 'iframe',
                  'height' : 90,
                  'width' : 728,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/ee0ceef4c63460d05357afd04f32beb7/invoke.js" onerror="window.parent.postMessage('ad-blocked-728', '*')"></script>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    } catch (e) {
      console.warn("Failed to write to ad iframe: ", e);
      setCollapsed(true);
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "ad-blocked-728") {
        setCollapsed(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (collapsed) return null;

  return (
    <div 
      id="ad-banner-728x90"
      className="w-full flex justify-center my-4 min-h-[90px] transition-all duration-300 no-print"
    >
      <div ref={containerRef} className="w-[728px] h-[90px] relative bg-slate-50/20 rounded-xl overflow-hidden" />
    </div>
  );
};

/**
 * Banner 320x50 Component (Mobile Header Banner)
 */
export const Banner320x50: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = "320";
    iframe.height = "50";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    iframe.scrolling = "no";

    iframe.addEventListener("error", () => {
      setCollapsed(true);
    });

    containerRef.current.appendChild(iframe);

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; min-height: 50px; background: transparent; }
              </style>
            </head>
            <body>
              <script type="text/javascript">
                var atOptions = {
                  'key' : '182929812081f5d26c7941376c306e1d',
                  'format' : 'iframe',
                  'height' : 50,
                  'width' : 320,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/182929812081f5d26c7941376c306e1d/invoke.js" onerror="window.parent.postMessage('ad-blocked-320', '*')"></script>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    } catch (e) {
      console.warn("Failed to write to ad iframe: ", e);
      setCollapsed(true);
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "ad-blocked-320") {
        setCollapsed(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (collapsed) return null;

  return (
    <div 
      id="ad-banner-320x50"
      className="w-full flex justify-center my-4 min-h-[50px] transition-all duration-300 no-print"
    >
      <div ref={containerRef} className="w-[320px] h-[50px] relative bg-slate-50/20 rounded-lg overflow-hidden" />
    </div>
  );
};

/**
 * Banner 300x250 Component (Square Content Banner)
 */
export const Banner300x250: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = "300";
    iframe.height = "250";
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    iframe.scrolling = "no";

    iframe.addEventListener("error", () => {
      setCollapsed(true);
    });

    containerRef.current.appendChild(iframe);

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; min-height: 250px; background: transparent; }
              </style>
            </head>
            <body>
              <script type="text/javascript">
                var atOptions = {
                  'key' : '644f1942b85852a339bf070b0b9be536',
                  'format' : 'iframe',
                  'height' : 250,
                  'width' : 300,
                  'params' : {}
                };
              </script>
              <script type="text/javascript" src="https://www.highperformanceformat.com/644f1942b85852a339bf070b0b9be536/invoke.js" onerror="window.parent.postMessage('ad-blocked-300', '*')"></script>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    } catch (e) {
      console.warn("Failed to write to ad iframe: ", e);
      setCollapsed(true);
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "ad-blocked-300") {
        setCollapsed(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (collapsed) return null;

  return (
    <div 
      id="ad-banner-300x250"
      className="w-full flex justify-center my-6 min-h-[250px] transition-all duration-300 no-print"
    >
      <div 
        ref={containerRef} 
        className="w-[300px] h-[250px] relative bg-slate-50/50 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-100" 
      />
    </div>
  );
};

/**
 * Native Banner Component (Responsive Native Feeds)
 */
export const NativeBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "280"; // Standard comfortable height for Adsterra responsive native feed rows
    iframe.style.border = "none";
    iframe.style.overflow = "hidden";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    iframe.scrolling = "no";

    iframe.addEventListener("error", () => {
      setCollapsed(true);
    });

    containerRef.current.appendChild(iframe);

    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { margin: 0; padding: 0; background: transparent; overflow: hidden; }
                #container-2d72bcfb968af3fa6bd3d736862a7980 { width: 100%; display: block; min-height: 250px; }
              </style>
            </head>
            <body>
              <div id="container-2d72bcfb968af3fa6bd3d736862a7980"></div>
              <script type="text/javascript" async="async" data-cfasync="false" src="https://pl30412619.effectivecpmnetwork.com/2d72bcfb968af3fa6bd3d736862a7980/invoke.js" onerror="window.parent.postMessage('ad-blocked-native', '*')"></script>
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    } catch (e) {
      console.warn("Failed to write to ad iframe: ", e);
      setCollapsed(true);
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "ad-blocked-native") {
        setCollapsed(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (collapsed) return null;

  return (
    <div 
      id="ad-native-banner"
      className="w-full flex justify-center my-6 min-h-[250px] transition-all duration-300 no-print"
    >
      <div 
        ref={containerRef} 
        className="w-full max-w-5xl relative bg-slate-50/30 rounded-[2rem] overflow-hidden border border-slate-100 p-4" 
      />
    </div>
  );
};

/**
 * Combined Header Banner Component (Responsive layout builder)
 * Renders 728x90 on md screens, and 320x50 on mobile.
 */
export const HeaderAdBanner: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center my-4 no-print select-none">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <Banner728x90 />
      </div>
      {/* Mobile Banner */}
      <div className="block md:hidden">
        <Banner320x50 />
      </div>
    </div>
  );
};
