function contactUs() {
  let message = prompt("What is your favaorite Japanese food?");
  let firstName = prompt("What is your first name?");
  let email = prompt("What is your email address?");
  if (firstName.length > 0) {
    alert(
      "Thank you " +
        firstName +
        "😁" +
        "We'll be in touch and I will send you recommendations for the local Restaurants 🍙🍜🍣"
    );
  } else {
    alert(
      "Thank you, dear " +
        "😀" +
        "We'll be in touch and I will send you recommendations for the local Restaurants 🍙🍜🍣"
    );
  }
}
let contactUsButton = document.querySelector("button");
contactUsButton.addEventListener("click", contactUs);
