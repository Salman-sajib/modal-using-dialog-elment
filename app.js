const openButton = document.querySelector("[data-open-button]");
const closeButton = document.querySelector("[data-close-button]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  const modalDimentions = modal.getBoundingClientRect();
  if (
    e.clientX < modalDimentions.left ||
    e.clientX > modalDimentions.right ||
    e.clientY < modalDimentions.top ||
    e.clientY > modalDimentions.bottom
  ) {
    modal.close();
  }
});
