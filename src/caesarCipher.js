function caesarCipher(string, shiftFactor) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const newString = string.split("");

  newString.forEach((value, index, array) => {
    if (alphabet.includes(value.toUpperCase())) {
      const lowercase = !alphabet.includes(value);

      let newLetter = alphabet.indexOf(value.toUpperCase()) + shiftFactor;

      while (newLetter > 25) newLetter -= 26;

      if (lowercase) array[index] = alphabet[newLetter].toLowerCase();
      else array[index] = alphabet[newLetter];
    }
  });

  return newString.join("");
}

export default caesarCipher;
