function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleSubmenu(sectionElement, id) {
  document
    .querySelectorAll(".mobile-submenu")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".mobile-menu .section")
    .forEach((s) => s.classList.remove("active"));

  const submenu = document.getElementById(id);
  const isActive = submenu.classList.contains("active");

  if (!isActive) {
    sectionElement.classList.add("active");
    submenu.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".main-menu .section");
  const submenus = document.querySelectorAll(".submenu");

  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      const submenuId = section.dataset.submenu;

      sections.forEach((s) => s.classList.remove("active"));
      submenus.forEach((sm) => sm.classList.remove("active"));

      section.classList.add("active");
      const submenu = document.getElementById(submenuId);
      if (submenu) submenu.classList.add("active");
    });
  });
});
