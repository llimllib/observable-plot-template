import * as Plot from "@observablehq/plot";

async function main(): Promise<void> {
  // const res = await fetch(`data.json`);
  // const stats = await res.json();
  const dotplot = Plot.dot(data, {
    x: "usg_pct",
    y: "ts_pct",
    stroke: "team",
    title: "name",
  }).plot();
  document.querySelector("#plot")!.append(dotplot);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});

const data = [
  {
    name: "Precious Achiuwa",
    team: "TOR",
    usg_pct: 18.5,
    ts_pct: 50.3,
    playoff_mp: 167,
    playoff_usg_pct: 18.2,
    playoff_ts_pct: 54.1,
    playoff_mpg: 27.83,
  },
  {
    name: "Steven Adams",
    team: "MEM",
    usg_pct: 12,
    ts_pct: 56.00000000000001,
    playoff_mp: 31,
    playoff_usg_pct: 1.3,
    playoff_ts_pct: null,
    playoff_mpg: 10.33,
  },
  {
    name: "Bam Adebayo",
    team: "MIA",
    usg_pct: 25,
    ts_pct: 60.8,
    playoff_mp: 157,
    playoff_usg_pct: 18.9,
    playoff_ts_pct: 60,
    playoff_mpg: 31.4,
  },
  {
    name: "Nickeil Alexander-Walker",
    team: "UTA",
    usg_pct: 24.1,
    ts_pct: 47.5,
    playoff_mp: 5,
    playoff_usg_pct: 22.9,
    playoff_ts_pct: 102.49999999999999,
    playoff_mpg: 5,
  },
];
