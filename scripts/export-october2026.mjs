import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const modules = new Map();

// Evaluate only the project's static editorial modules; no CMS or network access.
function loadStaticModule(filename, override) {
  filename = filename.replaceAll("\\", "/");
  if (filename.endsWith("/site.ts")) return { locales: ["es", "en", "fr"] };
  if (filename.endsWith(".json")) return JSON.parse(fs.readFileSync(filename, "utf8"));
  if (!override && modules.has(filename)) return modules.get(filename);
  const source = override ?? fs.readFileSync(filename, "utf8");
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
  }).outputText;
  const exports = {};
  const localRequire = (specifier) => {
    const target = path.resolve(path.dirname(filename), specifier);
    return loadStaticModule(target.endsWith(".json") ? target : `${target}.ts`);
  };
  new Function("exports", "require", compiled)(exports, localRequire);
  if (!override) modules.set(filename, exports);
  return exports;
}

const filename = `${root}/src/data/content.ts`.replaceAll("\\", "/");
const current = loadStaticModule(filename);
const grignyRelease = process.argv.includes("--grigny");
const baselineRef = grignyRelease
  ? "6dbed4a8a4465d6ddb68aeebbf646e4fd608e515"
  : "738e4ecc6a870f0b5e2141423bea66c7ae2508e8";
const baselineSource = execFileSync("git", ["show", `${baselineRef}:src/data/content.ts`], { cwd: root, encoding: "utf8" });
const baseline = loadStaticModule(filename, baselineSource);
const additions = grignyRelease
  ? loadStaticModule(`${root}/src/data/grigny2026.ts`).grigny2026Items
  : loadStaticModule(`${root}/src/data/october2026.ts`).october2026Items;
const differences = baseline.editorialItems.filter((old) => {
  const now = current.editorialItems.find((candidate) => candidate.id === old.id);
  return JSON.stringify(old) !== JSON.stringify(now);
});
if (differences.length) throw new Error(`Earlier entries changed: ${differences.map((item) => item.id).join(", ")}`);
const groups = grignyRelease ? 1 : 19;
if (additions.length !== groups * 3 || new Set(additions.map((item) => item.translation_group)).size !== groups) {
  throw new Error(`Delivery must contain ${groups} groups and ${groups * 3} translations.`);
}
const output = {
  additions,
  previousEntriesPreserved: baseline.editorialItems.length,
  counts: Object.fromEntries(["es", "en", "fr"].map((locale) => [locale, {
    total: current.editorialItems.filter((item) => item.locale === locale).length,
    new: additions.filter((item) => item.locale === locale).length,
    events: additions.filter((item) => item.locale === locale && item.type === "event").length,
    media: additions.filter((item) => item.locale === locale && item.type === "media").length,
    reports: additions.filter((item) => item.locale === locale && item.type === "report").length,
  }])),
};
const artifactDirectory = `${root}/artifacts/${grignyRelease ? "grigny-2026" : "october-2026"}`;
fs.mkdirSync(artifactDirectory, { recursive: true });
fs.writeFileSync(`${artifactDirectory}/content.json`, JSON.stringify(output, null, 2));
console.log(JSON.stringify({ counts: output.counts, previousEntriesPreserved: output.previousEntriesPreserved }));
