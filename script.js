const jokes = [
  {
    setup: 'Why don’t scientists trust atoms?',
    punchline: 'Because they make up everything!'
  },
  {
    setup: 'Did you hear about the mathematician who’s afraid of negative numbers?',
    punchline: 'He will stop at nothing to avoid them!'
  },
  {
    setup: 'How do you comfort a JavaScript bug?',
    punchline: 'You console it!'
  },
  {
    setup: 'Why don’t programmers like nature?',
    punchline: 'It has too many bugs!'
  }
];

const jokeText = document.getElementById('joke-text');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', generateJoke);

function generateJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const joke = jokes[randomIndex];
  jokeText.innerText = `${joke.setup} ${joke.punchline}`;
}