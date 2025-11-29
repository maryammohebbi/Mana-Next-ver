"use client";

import { useEffect } from "react";

const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function convertText(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  // quick bail if no digits in the text
  if (!/[0-9]/.test(node.data)) return;
  node.data = node.data.replace(/[0-9]/g, (ch) => persianDigits[ch]);
}

function walkAndConvert(root) {
  // text nodes only
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let n;
  while ((n = walker.nextNode())) convertText(n);
}

export default function PersianDigits() {
  useEffect(() => {
    // initial pass
    walkAndConvert(document.body);

    // Observe mutations (small, efficient observer)
    const obs = new MutationObserver((mutations) => {
      for (const mut of mutations) {
        // If text node changed:
        if (mut.type === "characterData") convertText(mut.target);
        // If new nodes added, process them
        if (mut.addedNodes && mut.addedNodes.length) {
          mut.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) convertText(node);
            else walkAndConvert(node);
          });
        }
      }
    });

    obs.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => obs.disconnect();
  }, []);

  return null;
}
