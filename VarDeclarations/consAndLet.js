function count(targetString) {
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;

  for (i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
};

var ans = count('aereerfefsrfx');

console.log(ans);