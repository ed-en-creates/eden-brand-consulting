const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ARTIFACTS_DIR =
  "C:\\Users\\Edo State Public Lib\\.gemini\\antigravity\\brain\\015143e9-4fd8-4e4c-b50c-3a6280b1364b";
const OUTPUT_DIR = path.join(__dirname, "..", "client", "public", "fashion");

// All fashion image filenames (excluding logos and team photos)
const FASHION_FILES = [
  "media__1773430990455.jpg",
  "media__1773430990646.jpg",
  "media__1773430991324.jpg",
  "media__1773430991483.jpg",
  "media__1773430991559.jpg",
  "media__1773431064764.jpg",
  "media__1773431065907.jpg",
  "media__1773431066091.jpg",
  "media__1773431066277.jpg",
  "media__1773431066394.jpg",
  "media__1773431086283.jpg",
  "media__1773431086352.jpg",
  "media__1773431086787.jpg",
  "media__1773431086949.jpg",
  "media__1773431087053.jpg",
  "media__1773431123456.jpg",
  "media__1773431124767.jpg",
  "media__1773431125127.jpg",
  "media__1773431125461.jpg",
  "media__1773431147096.jpg",
  "media__1773431147140.jpg",
  "media__1773431147489.jpg",
  "media__1773431147641.jpg",
];

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function processImages() {
  console.log(`Processing ${FASHION_FILES.length} images...`);
  for (let i = 0; i < FASHION_FILES.length; i++) {
    const file = FASHION_FILES[i];
    const inputPath = path.join(ARTIFACTS_DIR, file);
    const outputPath = path.join(
      OUTPUT_DIR,
      `fashion-${String(i + 1).padStart(2, "0")}.jpg`
    );
    try {
      await sharp(inputPath)
        .resize(800, 800, { fit: "cover", position: "center" })
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ ${file} → fashion-${String(i + 1).padStart(2, "0")}.jpg`);
    } catch (err) {
      console.error(`✗ Failed: ${file}`, err.message);
    }
  }
  console.log("Done!");
}

processImages();
