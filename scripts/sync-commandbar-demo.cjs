const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const root = path.resolve(process.argv[2] || "../omarchy-commandbar");
const load = require(path.join(root, "tests/loader.js"));
const engine = load(path.join(root, "lib/Engine.js"));
const config = JSON.parse(
  fs.readFileSync(path.join(root, "config.default.json"), "utf8"),
);
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "manifest.json"), "utf8"),
);
const services = {
  home: "/home/demo",
  rates: {
    rates: { USD: 1, EUR: 0.924, GBP: 0.786 },
    updated: 1793836800,
    stale: false,
  },
  zones: {
    "Asia/Tokyo": { offset: 540, abbr: "JST" },
    UTC: { offset: 0, abbr: "UTC" },
  },
  localZone: "UTC",
  now: () => new Date("2026-11-05T12:00:00Z"),
  emojis: [
    { e: "🔥", k: "fire" },
    { e: "🚒", k: "fire engine" },
    { e: "🧯", k: "fire extinguisher" },
  ],
  files: {
    query: "pdf",
    list: [
      "/home/demo/Documents/invoice.pdf",
      "/home/demo/Downloads/boarding-pass.pdf",
    ],
  },
  processes: [
    {
      pid: 101,
      rss: 400000,
      cpu: 12.5,
      name: "chrome",
      args: "/opt/google/chrome/chrome",
    },
    {
      pid: 102,
      rss: 200000,
      cpu: 3,
      name: "chrome",
      args: "/opt/google/chrome/chrome --type=renderer",
    },
  ],
  windows: [
    {
      address: "0xa1",
      cls: "terminal",
      title: "~/Code/commandbar",
      workspace: "2",
      focus: 1,
    },
    {
      address: "0xa2",
      cls: "terminal",
      title: "btop",
      workspace: "4",
      focus: 2,
    },
  ],
  apps: [
    {
      id: "terminal",
      name: "Terminal",
      generic: "Terminal Emulator",
      comment: "",
      keywords: [],
      icon: "",
      actions: [],
    },
  ],
  uuid: "795c5c43-0b37-4a2b-9801-f7e04b4ab222",
  requestUuid() {},
  agent: "claude",
};
const examples = [
  ["Calculator", "(240 - 36) / 12"],
  ["Currency", "100 usd to eur"],
  ["Units", "5 km to mi"],
  ["Time zones", "time in tokyo"],
  ["Files", ".pdf"],
  ["Web addresses", "example.com"],
  ["UUID", "uuid"],
  ["Symbols", ":degree"],
  ["Emoji", ":fire"],
  ["Windows", "w term"],
  ["Processes", "kill chrome"],
  ["AI agent", "ai why is my wifi slow"],
];
const scenes = examples.map(([label, query]) => ({
  label,
  query,
  mode: engine.mode(query, config),
  rows: engine.run(query, config, services).map((row) => {
    let action =
      row.actionLabel ||
      (row.run
        ? row.run.label || (row.run.kind === "open" ? "open" : "run")
        : row.complete && !row.copy
          ? "try it"
          : row.copy
            ? "copy"
            : "");
    action = action ? action[0].toUpperCase() + action.slice(1) : "";
    return {
      title: row.title,
      subtitle: row.subtitle,
      icon: row.icon,
      group: row.group || row.providerName,
      section: row.section,
      hero: row.hero,
      action,
      canComplete: Boolean(row.complete && (row.run || row.copy)),
    };
  }),
}));
const data = {
  version: manifest.version,
  commit: execFileSync("git", ["-C", root, "rev-parse", "HEAD"], {
    encoding: "utf8",
  }).trim(),
  scenes,
};
fs.writeFileSync(
  "src/data/commandbar-demo.json",
  JSON.stringify(data, null, 2) + "\n",
);
console.log(
  scenes.map((s) => `${s.label}: ${s.rows.length} results`).join("\n"),
);
