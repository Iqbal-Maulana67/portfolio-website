"use client";

import { useEffect } from "react";
import JobShow from "./JobShow";

export default function Homepage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold">
        Hello, I'm Moch. Iqbal Maulana Fiekri
      </h1>
      <div className="h-0.5">
        <JobShow />
      </div>
    </section>
  );
}
