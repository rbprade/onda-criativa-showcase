import fs from "fs";
import path from "path";

const clientDir = "dist/client";
const assetsDir = path.join(clientDir, "assets");
const outDir = "dist/static";

function getAssets() {
  const files = fs.readdirSync(assetsDir);
  const css = files.filter((f) => f.endsWith(".css"));
  const js = files.filter((f) => f.endsWith(".js")).sort();
  return { css, js };
}

function generateHtml() {
  const { css, js } = getAssets();

  const cssTags = css
    .map((f) => `    <link rel="stylesheet" href="./assets/${f}" />`)
    .join("\n");

  const jsTags = js
    .map((f) => `    <script type="module" src="./assets/${f}"></script>`)
    .join("\n");

  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CopoPrint - Embalagens Personalizadas</title>
    <meta name="description" content="CopoPrint - Soluções em embalagens personalizadas, copos de papel, sacos, guardanapos e muito mais." />
${cssTags}
  </head>
  <body>
    <div id="app"></div>
${jsTags}
  </body>
</html>
`;
}

function buildStatic() {
  if (!fs.existsSync(assetsDir)) {
    console.error("Assets directory not found. Run 'vite build' first.");
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  // Copy assets
  const destAssetsDir = path.join(outDir, "assets");
  fs.mkdirSync(destAssetsDir, { recursive: true });
  for (const file of fs.readdirSync(assetsDir)) {
    fs.copyFileSync(path.join(assetsDir, file), path.join(destAssetsDir, file));
  }

  // Write index.html
  const html = generateHtml();
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf-8");

  console.log(`Static build written to ${outDir}/`);
  console.log(`  - index.html`);
  console.log(`  - assets/ (${fs.readdirSync(destAssetsDir).length} files)`);
}

buildStatic();
