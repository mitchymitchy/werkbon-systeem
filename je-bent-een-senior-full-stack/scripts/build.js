const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "dist");
const files = ["index.html", "styles.css", "app.js", "database-config.js", "supabaseClient.js"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

fs.copyFileSync(path.join(root, "index.html"), path.join(outDir, "404.html"));

console.log(`Build klaar: ${files.length + 1} bestanden geschreven naar ${path.relative(root, outDir)}`);
