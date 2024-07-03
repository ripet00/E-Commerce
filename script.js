// open the img in a new window
function openImg(element) {
  window.open(element.src);
}

// for zoomin effect when click
function zoomIn(element) {
  element.classList.toggle("zoom-in");
}

// get the current year
const currentYear = new Date().getFullYear();

// set the current year to the span
document.getElementById("currentYear").textContent = currentYear;
