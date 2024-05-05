const slide = [
  "url(css/img/slide-1.jpg)",
  "url(css/img/slide-2.jpg)",
  "url(css/img/slide-3.jpg)",
];

const img = document.getElementById("slide");

let i = 0;
slider();

function slider() {
  if (i > slide.length) {
    i = 0;
  }
  img.style.backgroundImage = slide[i];
  setTimeout(slider, 2600);
  i++;
}
