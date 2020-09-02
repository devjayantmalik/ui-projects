window.addEventListener("DOMContentLoaded", () => {
  (function () {
    document.querySelector(".sidebar-toggler").onclick = function () {
      // HIDE THE SIDEBAR
      document.querySelector(".sidebar").classList.toggle("hide");

      // REMOVE THE MARGIN FROM NAVBAR AND CONTENT
      document.querySelector(".sidebar-navbar").classList.toggle("no-margin");
      document.querySelector(".sidebar-main").classList.toggle("no-margin");
    };
  })();
});

// })(function () {
//   document.querySelector("#msbo").onclick = function () {
//     document.querySelector("body").classList.toggle("msb-x");
//   };
// })();

// (function () {
//   $("#msbo").on("click", function () {
//     $("body").toggleClass("msb-x");
//   });
// })();
