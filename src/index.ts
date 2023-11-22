import * as Plot from "@observablehq/plot";

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
  const res = await fetch("data/players_2023.json");
  const data = (await res.json()) as Array<Player>;
  const barchart = Plot.plot({
    width: 640,
    grid: true,
    marks: [
      Plot.dot(data, {
        x: "fga",
        y: "fgm",
        fill: "team_abbreviation",
      }),
      Plot.tip(
        data,
        Plot.pointer({
          x: "fga",
          y: "fgm",
          title: "player_name",
        }),
      ),
      Plot.ruleY([0]),
    ],
  });
  document.querySelector("#plot")?.append(barchart);
}

window.addEventListener("DOMContentLoaded", async (_evt) => {
  await main();
});
