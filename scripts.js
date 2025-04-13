(function () {
  // Vars
  const elements = {
    textarea: document.getElementById("burnrTextarea"),
    slowBurnBtn: document.getElementById("burnrSlowBurnBtn"),
    immediateBurnBtn: document.getElementById("burnrImmediateBurnBtn"),
  };

  // Methods
  function immediateBurn() {
    const { textarea } = elements;
    textarea.value = "";
  }

  function deleteRandomChars(deleteCount) {
    const { textarea } = elements;
    const textValue = textarea.value;

    if (textValue.length === 0) return;

    // Convert to array for easier manipulation
    const charArr = textValue.split("");

    // Randomly delete deleteCount number of chars, whilst char array has length
    for (let i = 0; i < deleteCount && charArr.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * charArr.length);
      charArr.splice(randomIndex, 1);
    }

    textarea.value = charArr.join("");

    setTimeout(() => deleteRandomChars(deleteCount), 50); // Adjust delay for faster or slower burn
  }

  function slowBurn() {
    const { textarea } = elements;
    const textValue = textarea.value;

    const deleteCount = Math.ceil(textValue.length * 0.01); // Delete 1% of the characters at once.

    deleteRandomChars(deleteCount);
  }

  function init() {
    const { slowBurnBtn } = elements;
    slowBurnBtn.addEventListener("click", slowBurn);

    const { immediateBurnBtn } = elements;
    immediateBurnBtn.addEventListener("click", immediateBurn);
  }

  // Actions
  init();
})();
