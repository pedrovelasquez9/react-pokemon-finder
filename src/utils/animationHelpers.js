const animatePokemonButton = (elemName = null) => {
  if (elemName) {
    const buttonElem = document.getElementById(elemName);
    buttonElem.classList.add("animated-btn");
    setTimeout(() => {
      buttonElem.classList.remove("animated-btn");
    }, 1000);
  }
};

export { animatePokemonButton };
