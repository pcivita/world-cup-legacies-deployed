"use client";
import ChartTest from "../../components/ChartTest";
import useMeasure from "react-use-measure";
import Link from "next/link";

export default function Home() {
  // This hook allows us to dynamically measure our components
  // Thus, d3 can redraw itself based on the current dimensions
  let [ref, bounds] = useMeasure();

  return (
    <main className={`flex min-h-screen flex-col items-center gap-4`}>
      <div className="flex-col p-24 h-min border-2">
        <h1 className="">World Cup Project</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>

      <Link href="/Brazil" className="bg-green-200 rounded-md p-4">
        <h2> Go to Brazil! </h2>
      </Link>
      <Link href="/Russia" className="bg-blue-200 rounded-md p-4">
        <h2> Go to Russia! </h2>
      </Link>
      <Link href="/Qatar" className="bg-red-200 rounded-md p-4">
        <h2> Go to Qatar! </h2>
      </Link>
    </main>
  );
}
