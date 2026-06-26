// "use client";

// import { useEffect } from "react";
// import { Crisp } from "crisp-sdk-web";

// const CrispChat = () => {
//   useEffect(() => {
//     // Replace 'YOUR_WEBSITE_ID' with the ID from your Crisp dashboard
//     Crisp.configure("e1e99f89-7d79-4b0d-950d-d7ed8ebb561c");
//   }, []);

//   return null; // This component doesn't render anything visible
// };

// export default CrispChat;


"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { usePathname } from "next/navigation";

const CrispChat = () => {
  const pathname = usePathname();

  // 1. Initialize Crisp once on mount
  useEffect(() => {
    Crisp.configure("e1e99f89-7d79-4b0d-950d-d7ed8ebb561c");
  }, []);

  // 2. Open chat every time the pathname changes
  useEffect(() => {
    // Small timeout ensures the DOM has updated before trying to open
    const timer = setTimeout(() => {
      Crisp.chat.open();
    }, 500); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default CrispChat;