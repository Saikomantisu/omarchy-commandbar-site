import demo from "./commandbar-demo.json";

type Scene = (typeof demo.scenes)[number];
export type FeatureCommand = { label: string; text: string; scene: Scene };
export type FeatureGroup = {
  id: string;
  title: string;
  text: string;
  commands: FeatureCommand[];
};

const scene = (label: string): Scene =>
  demo.scenes.find((item) => item.label === label)!;
const sample = (
  label: string,
  query: string,
  title: string,
  subtitle: string,
  icon: string,
  action = "Copy",
  hero = false,
): Scene => ({
  label,
  query,
  mode: null,
  rows: [
    {
      title,
      subtitle,
      icon,
      group: label,
      section: "",
      hero,
      action,
      canComplete: false,
    },
  ],
});

export const featureGroups: FeatureGroup[] = [
  {
    id: "find-launch",
    title: "Find & launch",
    text: "Get to the app, window or file you need.",
    commands: [
      {
        label: "Apps",
        text: "Launch an installed app by name.",
        scene: sample(
          "Apps",
          "browser",
          "Browser",
          "Open your default browser",
          "󰖟",
          "Open",
        ),
      },
      {
        label: "Windows",
        text: "Switch to an open window with w.",
        scene: scene("Windows"),
      },
      {
        label: "Files",
        text: "Search file names with a dot, or type a folder path to browse.",
        scene: scene("Files"),
      },
      {
        label: "Web addresses",
        text: "Type an address and press Enter to open it.",
        scene: sample(
          "Web addresses",
          "example.com",
          "https://example.com",
          "Open in your browser",
          "󰖟",
          "Open",
        ),
      },
    ],
  },
  {
    id: "calculate-convert",
    title: "Calculate & convert",
    text: "Quick answers without reaching for another app.",
    commands: [
      {
        label: "Calculator",
        text: "Do maths as you type. Enter copies the answer.",
        scene: scene("Calculator"),
      },
      {
        label: "Currency",
        text: "Convert currencies with rates cached daily.",
        scene: scene("Currency"),
      },
      {
        label: "Units",
        text: "Convert distances, weights, temperatures and more.",
        scene: scene("Units"),
      },
      {
        label: "Time zones",
        text: "Check the time anywhere in the world.",
        scene: scene("Time zones"),
      },
      {
        label: "Dates",
        text: "Count the days until a date.",
        scene: sample(
          "Dates",
          "days until dec 25",
          "50 days",
          "Until 25 Dec 2026 · sample date: 5 Nov 2026",
          "󰃭",
          "Copy",
          true,
        ),
      },
    ],
  },
  {
    id: "tools-shortcuts",
    title: "Tools & shortcuts",
    text: "Small utilities for the things you do every day.",
    commands: [
      {
        label: "Emoji & symbols",
        text: "Find an emoji or symbol and paste it straight in.",
        scene: scene("Emoji"),
      },
      {
        label: "Processes",
        text: "Quit a stuck process without opening a terminal.",
        scene: scene("Processes"),
      },
      {
        label: "UUIDs, hashes & encoding",
        text: "Generate a UUID, hash text or encode a string.",
        scene: sample(
          "Encoding",
          "base64 hello",
          "aGVsbG8=",
          "Base64 encoded text",
          "󰘦",
          "Copy",
          true,
        ),
      },
      {
        label: "Keyword commands",
        text: "Search the web with built-in keywords, or add your own.",
        scene: sample(
          "Web search",
          "g omarchy themes",
          "Search Google for omarchy themes",
          "Open search results in your browser",
          "󰖟",
          "Open",
        ),
      },
      {
        label: "AI agent",
        text: "Send a prompt to your Omarchy agent or a configured chat website.",
        scene: scene("AI agent"),
      },
    ],
  },
];
