// Retrieve user data from localstorage //
const retrieveUser = localStorage.getItem("user");
const parseUser = JSON.parse(retrieveUser);
console.log(parseUser);

// Implement user information into the index page //
const divTitle = document.getElementById("main-title");
const userName = parseUser.name;
const userNameDisplay = document.createElement("h1");
userNameDisplay.textContent = `Hello ${userName}`;
divTitle.appendChild(userNameDisplay);

// Ambiance sound and its button //
const ambianceSound = document.getElementById("background-sound");
const buttonSound = document.getElementById("bouton-logo-sound");
const imgSound = document.getElementById("logo-sound")
let isSound = false;

buttonSound.addEventListener("click", () => {
  if (!isSound) {
    ambianceSound.play();
    isSound=true;
    imgSound.src="assets/images/son.png"
  } else {
    ambianceSound.pause();
    isSound=false;
    imgSound.src="assets/images/son-off.png"
  }
});


// let scrollPostContainer = document.getElementById("post-container");
// scrollPostContainer.addEventListener("scroll", () => {
//   scrollPostContainer.scrollIntoView({
//     behavior: "smooth",
//     block: "start",
//     inline: "nearest"
//   })
// });

