function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleSubmenu(sectionElement, id) {
  const submenu = document.getElementById(id);
  const isActive = submenu.classList.contains("active");

  // Close all submenus and remove active states
  document
    .querySelectorAll(".mobile-submenu")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".mobile-menu .section")
    .forEach((s) => s.classList.remove("active"));

  // If the clicked submenu was not active, open it
  if (!isActive) {
    sectionElement.classList.add("active");
    submenu.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".main-menu .section");
  const submenus = document.querySelectorAll(".submenu");
  const menuDivider = document.querySelector(".menu-divider");
  const menuContainer = document.querySelector(".menu-container");

  // Hide all on load
  submenus.forEach((submenu) => submenu.classList.remove("active"));
  sections.forEach((section) => section.classList.remove("active"));
  if (menuDivider) menuDivider.classList.remove("active");

  // Hover behavior for desktop menu
  sections.forEach((section) => {
    section.addEventListener("mouseenter", () => {
      const submenuId = section.dataset.submenu;

      // Reset all first
      sections.forEach((s) => s.classList.remove("active"));
      submenus.forEach((sm) => sm.classList.remove("active"));
      if (menuDivider) menuDivider.classList.remove("active");

      // Activate hovered section and its submenu
      section.classList.add("active");
      const submenu = document.getElementById(submenuId);
      if (submenu) submenu.classList.add("active");
      if (menuDivider) menuDivider.classList.add("active");
    });
  });

  // Hide everything on mouse leave
  if (menuContainer) {
    menuContainer.addEventListener("mouseleave", () => {
      sections.forEach((s) => s.classList.remove("active"));
      submenus.forEach((sm) => sm.classList.remove("active"));
      if (menuDivider) menuDivider.classList.remove("active");
    });
  }
});
  