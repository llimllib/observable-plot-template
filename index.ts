import * as Plot from "@observablehq/plot";

async function main(): Promise<void> {
  const res = await fetch("data/data.json");
  const data = await res.json();
  console.log(data);
  const barchart = Plot.plot({
    width: 640,
    grid: true,
    marginBottom: 100,
    color: {
      domain: [52, 68],
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
