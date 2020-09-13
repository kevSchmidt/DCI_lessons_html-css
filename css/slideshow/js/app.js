//  On click on banner button
document.querySelector(".banner button").addEventListener("click", () => {
  // from banner to slide wrapper
  document.querySelector(".banner").style.display = "none";
  document.querySelector(".slideshow-wrapper").style.cssText =
    "opacity:1; visibility: visible";
  // slides are wrapping on slideshow
  document.querySelector(".slideshow").style.animation =
    "slideshow 24s infinite";
});
