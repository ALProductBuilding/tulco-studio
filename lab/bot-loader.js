// Test : avatar animé Tulco Studio (package bot-avatars, MIT, copié dans lab/bot-avatars).
// Attend le React UMD de support.js, puis expose window.TulcoBot.Avatar pour <x-import>.
const base = new URL(".", import.meta.url);
const waitReact = () => new Promise((resolve) => {
  const t = setInterval(() => { if (window.React) { clearInterval(t); resolve(); } }, 50);
});
await waitReact();
const { BotAvatar } = await import(new URL("bot-avatars/index.es.js", base).href);
const React = window.React;
// Ne transmet que les props documentées : x-import ajoute des props internes (__hintSize…) qu'il ne faut pas poser sur le canvas.
function Avatar(p) {
  const size = /^\d+$/.test(String(p.size)) ? Number(p.size) : p.size;
  return React.createElement(BotAvatar, {
    type: p.type || "square",
    state: p.state === "working" ? "working" : "default",
    size: size || 64,
    shading: p.shading === "plastic" ? "plastic" : "fabric",
    "aria-label": p.label || "Tulco Studio",
  });
}
window.TulcoBot = { Avatar };
