/* SUCCESS MESSAGE */
document.querySelector("form").addEventListener("submit", () => {
  document.getElementById("successMsg").innerText =
    "✅ Registration Successful! See you at FESTRONIX 2025";
});

/* COUNTDOWN */
const festDate = new Date("2025-02-20T09:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = festDate - now;
  const el = document.getElementById("countdown");

  if (diff <= 0) {
    el.innerText = "🚀 EVENT LIVE NOW";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  el.innerText = `⏳ ${d} Days ${h} Hours to go`;
}, 1000);
