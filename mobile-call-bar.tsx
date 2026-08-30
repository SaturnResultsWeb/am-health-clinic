"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Phone } from "lucide-react";

import { contact } from "@/lib/site";

export function MobileCallBar() {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line-dark bg-ground/95 p-3 backdrop-blur-xl md:hidden"
        >
          <a
            href={contact.phoneHref}
            className="flex items-center justify-center gap-2.5 rounded-[4px] bg-cream py-3.5 font-medium text-ground transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97]"
          >
            <Phone className="h-4.5 w-4.5" strokeWidth={1.75} />
            Call to book · {contact.phoneDisplay}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
