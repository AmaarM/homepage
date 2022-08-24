import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { AnimatePresence } from "framer-motion";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={true}
      onExitComplete={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
};

export default MyApp;
