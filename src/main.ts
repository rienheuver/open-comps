document.querySelectorAll("[data-color-picker]").forEach((el) => {
  el.addEventListener("click", setColor);
  (el as HTMLElement).style.setProperty(
    "background-color",
    `var(--${el.classList[0]}-5)`
  );
});

function setColor(event: Event) {
  const target = event.target as HTMLElement;
  const color = target.classList[0];
  const root = document.querySelector(":root") as HTMLElement;
  root.style.setProperty("--brand-color", `var(--${color}-5)`);
}
