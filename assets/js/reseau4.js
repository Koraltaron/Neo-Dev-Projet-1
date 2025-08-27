// image variables
const previewImages = document.getElementById("images-of-projects");
const slide1 = 'url("/assets/images/emoji-grimace-fill-pink.svg")';


// form variables
const retrieveUser = localStorage.getItem("user");
const parseUser = JSON.parse(retrieveUser);
console.log(parseUser);

// button variables
const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");
const hideButton = document.getElementById("hide-button")

//text elements to be changed
const profileText = document.querySelector("#about-me")


//image carousel
previewImages.style.backgroundImage = slide1;

previewImages.addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "/index.html";
  }, 1000)
});

//hide button
hideButton.addEventListener("click", function () {
  console.log("hide button activated")
  if (profileText.style.display === "block") {
    profileText.style.display = "none";
    hideButton.textContent = "agrandir"
  } else {
    profileText.style.display = "block";
    hideButton.textContent = "reduire"
  }
})

// Ambiance sound and its button //
const ambianceSound = document.getElementById("background-sound");
const buttonSound = document.getElementById("sound-toggle");
// const imgSound = document.getElementById("logo-sound")
let isSound = false;

ambianceSound.pause();

buttonSound.addEventListener("click", () => {
  if (!isSound) {
    ambianceSound.play();
    isSound = true;
    buttonSound.src = "/assets/images/son.png"
    console.log("sound on")
  } else {
    ambianceSound.pause();
    isSound = false;
    buttonSound.src = "/assets/images/son-off.png"
    console.log("sound off")
  }
});
