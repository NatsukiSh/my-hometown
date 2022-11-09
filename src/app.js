function contactUs() {
  let message = prompt("What is your favaorite Japanese food?");
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you " +
      name +
      "😁" +
      "We'll be in touch and I will send you recommendation for the local Restaurants 🍙🍜🍣"
  );
}
let contactUsButton = document.querySelector("button");
contactUsButton.addEventListener("click", contactUs);

function learnButton() {
  let message = prompt("What is your level of your Japanese language?");
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you " +
      name +
      "😁" +
      "We'll be in touch and I will send you useful Japanese languague whilst your stay!🗾🎌🏯"
  );
}
let learnButton = document.querySelector("button");
learnButton.addEventListener("click", learnButton);
