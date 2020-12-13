let phraseSpan;

const funnyPhrases = [
  "crafting a NASA spaceship in ",
  "eating a delicious pizza in ",
  "winning a Tekken game in ",
  "doodling a space cowboy in ",
  "reading a book with words in ",
  "finishing my daily 1000 push-ups in ",
  "playing some good ol' grunge in "
];

const randInt = (min,max) => {
  const range = max - min;
  const rand = Math.floor(Math.random() * (range + 1));
  return min + rand;
};

const animate = () => {
  phraseSpan.innerText = funnyPhrases[randInt(0, funnyPhrases.length - 1)];
}

phraseSpan = document.querySelector('#funny-phrase');
window.setInterval(animate, 1500);