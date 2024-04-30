document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("#navbar_items a");

  navItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      navItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.add("blur");
        }
      });
    });

    item.addEventListener("mouseout", () => {
      navItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("blur");
        }
      });
    });
  });
});
