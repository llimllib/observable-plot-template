import * as Plot from "@observablehq/plot";
import { extent } from "d3-array";

interface Player {
  name: string;
  team: string;
  usg_pct: number;
  ts_pct: number;
  playoff_mp: number;
  playoff_usg_pct: number;
  playoff_ts_pct: number;
  playoff_mpg: number;
}

async function main(): Promise<void> {
  const res = await fetch("data/data.json");
  const data = (await res.json()) as Array<Player>;
  const barchart = Plot.plot({
    width: 640,
    grid: true,
    marginBottom: 100,
    color: {
      domain: extent(data, (d) => d.playoff_ts_pct),
      pivot: 55,
      scheme: "BuRd",
    },
    x: {
      tickRotate: 45,
    },
    marks: [
      Plot.barY(data, {
        x: "name",
        y: "playoff_ts_pct",
        fill: "playoff_ts_pct",
      }),
      Plot.ruleY([0]),
    ],
  });
  document.querySelector("#plot")?.append(barchart);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});
