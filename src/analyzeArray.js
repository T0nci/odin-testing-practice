function analyzeArray(array) {
  let min = array[0];
  let max = array[0];
  let average = array[0];
  const length = array.length;

  for (let i = 1; i < length; i += 1) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    average += array[i];
  }

  average /= length;

  return {
    average,
    min,
    max,
    length,
  };
}

export default analyzeArray;
