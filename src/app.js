function contactUs() {
  let message = prompt("What is your favaorite Japanese food?");
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");

  alert(
    "Thank you " +
      name +
      "😁" +
      "We'll be in touch and I will send you recommendations for the local Restaurants 🍙🍜🍣"
  );
}
let contactUsButton = document.querySelector("button");
contactUsButton.addEventListener("click", contactUs);
