// set the active tab visible at first

const menu_items = document.querySelectorAll(".tabs-menu > li");

// make tab visible on click on menu item.
menu_items.forEach((item) => {
  const target = document.querySelector(item.dataset.target);

  item.onclick = () => {
    // make all content items hidden
    document.querySelectorAll(".tabs-content > *").forEach((item) => {
      item.classList.remove("visible");
    });

    // remove active from all tabs and mark current tab as active
    menu_items.forEach((item) => {
      item.classList.remove("active");
    });

    // mark current item as active
    item.classList.add("active");

    if (!target.classList.contains("visible")) {
      target.classList.add("visible");
    }
  };
});

// make active tab visible
const activeMenu = document.querySelector(".tabs-menu .active");

const menuContent = document.querySelector(activeMenu.dataset.target);

if (!menuContent.classList.contains("visible")) {
  menuContent.classList.add("visible");
}
