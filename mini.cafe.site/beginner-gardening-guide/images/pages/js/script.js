// Back to top button
const btn = document.createElement("button");
btn.innerText = "↑";
btn.id = "back-to-top";
document.body.appendChild(btn);

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.display = "none";
btn.style.padding = "10px";

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 200 ? "block" : "none";
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
