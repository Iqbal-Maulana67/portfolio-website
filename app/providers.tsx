"use client";

import SmoothScroll from "@/components/SmoothScrolling";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}