const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "styles.css"), "utf8");

test("uses semantic landmarks and accessibility hooks", () => {
  for (const token of [
    "<header",
    "<nav",
    "<main",
    "<footer",
    'href="#main-content"',
  ]) {
    assert.match(html, new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(css, /prefers-reduced-motion/);
});

test("links deployed projects to their live apps", () => {
  for (const link of [
    "https://signaldesk-ten-mauve.vercel.app/",
    "https://retinopathy-grading-4mwhffmvucwr59zg4sehsz.streamlit.app/",
    "https://globe-ready.web.app/",
    "https://nudgefund.vercel.app/",
    "https://churn-probability-opcp7lvnjqqwejyoo77drm.streamlit.app/",
    "https://github.com/shlokbhutani13/ml-playground",
    "https://doge-forecast-hzbcysrfyyxfrqzagu6vu7.streamlit.app/",
    "https://github.com/shlokbhutani13/ai-outlook",
    "https://shlokbhutani13.github.io/tword/",
    "https://price-tracker-3sjc.onrender.com/",
    "https://www.rksanitarywares.com/",
  ]) {
    assert.match(html, new RegExp(link.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  for (const title of [
    "SignalDesk",
    "Retinopathy Grading",
    "GlobeReady",
    "NudgeFund",
    "Churn Probability",
    "ML Playground",
    "DOGE Forecast Lab",
    "AI Outlook",
    "Tword",
    "Price Tracker",
    "RK Sanitarywares",
  ]) {
    assert.match(html, new RegExp(`>${title}<`));
  }
});

test("removes stale projects and includes share metadata", () => {
  assert.doesNotMatch(html, /ml-regression-demo/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /name="description"/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /styles\.css/);
  assert.match(html, /script\.js/);
});
