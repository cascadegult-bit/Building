const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
  const isOpen = links.classList.toggle("open");
  menu.setAttribute("aria-expanded", isOpen);
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));

document.getElementById("budgetForm").addEventListener("submit", e => {
  e.preventDefault();
  const area = Number(document.getElementById("area").value);
  const type = document.getElementById("projectType").value;
  const finish = document.getElementById("finish").value;
  if (!area || area < 1) return;
  const rates = { basic: 38000, standard: 55000, premium: 80000 };
  let rate = rates[finish];
  if (type === "reno") rate *= .72;
  if (type === "commercial") rate *= 1.12;
  const low = area * rate * .9, high = area * rate * 1.12;
  const money = n => "KES " + Math.round(n).toLocaleString();
  document.getElementById("estimate").textContent = `Indicative range: ${money(low)} – ${money(high)}`;
});
