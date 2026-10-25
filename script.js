
const enterBtn = document.querySelector("#enterBtn");
const secretMessage = document.querySelector("#secretMessage");
const letterButtons = document.querySelectorAll(".letter-button");

if (enterBtn && secretMessage) {
  enterBtn.addEventListener("click", () => {
    const isClosed = secretMessage.classList.toggle("hidden");

    enterBtn.textContent = isClosed
      ? "ENTER THE SOCIETY ♡"
      : "CLOSE YOUR INVITATION ♡";
  });
}

letterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const letterId = button.dataset.letter;
    const message = document.querySelector(`#letter${letterId}`);

    if (!message) return;

    const isClosed = message.classList.toggle("hidden");

    button.textContent = isClosed
      ? "OPEN LETTER ♡"
      : "CLOSE LETTER ♡";

    button.setAttribute("aria-expanded", String(!isClosed));
  });
});
