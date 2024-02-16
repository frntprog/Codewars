//return the total number of smiling faces in the array
function countSmileys(arr) {
  const eyes = [":", ";"];
  const nose = ["-", "~"];
  const mouth = [")", "D"];

  const smiles = [];

  for (let i = 0; i < eyes.length; i++) {
    for (let k = 0; k < mouth.length; k++) {
      smiles.push(eyes[i] + mouth[k]);
    }
  }

  for (let i = 0; i < eyes.length; i++) {
    for (let j = 0; j < nose.length; j++) {
      for (let k = 0; k < mouth.length; k++) {
        if (!smiles.includes(eyes[i] + nose[j] + mouth[k])) {
          smiles.push(eyes[i] + nose[j] + mouth[k]);
        }
      }
    }
  }

  const SmilesCounter = arr.reduce((acc, curr) => {
    if (smiles.find((el) => el === curr)) {
      acc += 1;
    }
    return acc;
  }, 0);

  return SmilesCounter;
}
