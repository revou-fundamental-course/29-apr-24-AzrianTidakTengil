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

// contact validation

const nameUser = document.getElementById("name");
const emailUser = document.getElementById("email");
const option = document.getElementById("interested");
const warningName = document.getElementById("warning-name");
const warningEmail = document.getElementById("warning-email");
const warningOpt = document.getElementById("warning-opt");

function sumbit() {
  if (!nameUser.value) {
    warningName.style.display = "block";
  } else {
    warningName.style.display = "none";
  }

  if (!emailUser.value) {
    warningEmail.style.display = "block";
    warningEmail.innerHTML = "plese insert your email";
  } else {
    const value = new String(emailUser.value);
    const indexSimbol = value.search(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/
    );

    if (indexSimbol !== -1) {
      warningEmail.style.display = "none";
    } else {
      warningEmail.style.display = "block";
      warningEmail.innerHTML = "this not email, example ..@gmail.com or other";
    }
  }

  if (!option.value) {
    warningOpt.style.display = "block";
  } else {
    warningOpt.style.display = "none";
  }

  if (option.value && emailUser.value && nameUser.value) {
    alert("Sales will contact you 1x24 hours after we receive the data.");
    console.log(
      `Name: ${nameUser.value}\nEmail: ${emailUser.value}\nOption: ${option.value}`
    );
  }
}

// navbar on mobile
const navbar = document.getElementById("mobile");
const icon = document.getElementById("btn-navbar");

function list() {
  icon.style.display = "none";
  navbar.style.display = "flex";
  navbar.style.flexDirection = "column";
  navbar.className += " container-navbar";
}

// close navbar on mobile
function exit() {
  navbar.style.display = "none";
  icon.style.display = "block";
}
