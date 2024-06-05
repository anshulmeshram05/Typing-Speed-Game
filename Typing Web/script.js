 // VARIABLES
 let words = [
    'cat', 'dog', 'ball', 'car', 'hat', 'book', 'sun', 'tree', 'fish', 
    'star', 'moon', 'rain', 'bird', 'boat', 'shoe', 'milk', 'cake', 'bed',
    'apple', 'baby', 'chair', 'door', 'egg', 'frog', 'grass', 'house',
    'ice', 'jump', 'key', 'lamp', 'man', 'nest', 'orange', 'pen', 'queen',
    'rat', 'sock', 'toy', 'van', 'window', 'yarn', 'zebra', 'ant', 'bell',
    'cup', 'doll', 'elk', 'fork', 'goat', 'hand', 'ink', 'jam', 'kite', 
    'leaf', 'mat', 'nut', 'owl', 'pig', 'quiz', 'rope', 'soap', 'top', 
    'vest', 'whale', 'x-ray', 'yolk', 'zip', 'arch', 'bench', 'cook', 'duck', 
    'ear', 'farm', 'gift', 'hill', 'island', 'jungle', 'kitchen', 'lemon', 
    'monkey', 'nap', 'octopus', 'piano', 'quilt', 'road', 'snake', 'tent', 
    'umbrella', 'vase', 'wave', 'xylophone', 'yogurt', 'zigzag',
    'garden', 'mountain', 'river', 'ocean', 'forest', 'bicycle', 'airplane', 
    'vacation', 'adventure', 'journey', 'history', 'music', 'puzzle', 'sandwich', 
    'pencil', 'umbrella', 'computer', 'telephone', 'camera', 'holiday', 'science',
    'fiction', 'library', 'concert', 'breeze', 'harbor', 'journal', 'museum', 
    'neighborhood', 'orchestra', 'picnic', 'recipe', 'stadium', 'tournament', 
    'university', 'volcano', 'whisper', 'yawn', 'zipper', 'architecture', 
    'balance', 'celebrate', 'decorate', 'education', 'family', 'geography', 
    'harmony', 'imagination', 'justice', 'knowledge', 'landscape', 'memory', 
    'nature', 'opera', 'photograph', 'question', 'recycle', 'symphony', 
    'tradition', 'unique', 'volunteer', 'weather', 'xenon', 'youth', 'zephyr', 
    'ability', 'bamboo', 'creativity', 'diversity', 'elegance', 'fantasy', 
    'gratitude', 'happiness', 'innovation', 'journey', 'kaleidoscope', 
    'laughter', 'motivation', 'nostalgia', 'opportunity', 'potential', 
    'quality', 'respect', 'success', 'talent', 'understanding', 'victory', 
    'wisdom', 'xylophone', 'yearning', 'zealous', 'adventure', 'bravery',
    'philosophy', 'architecture', 'astronomy', 'psychology', 'economics', 
    'linguistics', 'sociology', 'anthropology', 'biochemistry', 'neuroscience', 
    'metaphysics', 'geology', 'literature', 'democracy', 'geopolitics', 'symphony', 
    'algorithm', 'hypothesis', 'consciousness', 'epistemology', 'thermodynamics',
    'quintessential', 'ethereal', 'ineffable', 'pulchritudinous', 
    'oncology', 'hematology', 'dermatology', 'paleontology', 'zoology',
    'biotechnology', 'nanotechnology', 'cryptography', 'quantum', 
    'electromagnetic', 'photosynthesis', 'cytogenetics', 'neuroplasticity'
 ];
    

const levels = {
    easy: 5,
    medium: 5,
    hard: 5
};
let currentLevel = levels.easy;
let timeCount = currentLevel + 1, scoreCount = 0, isPlaying, wordDisplayed;

let currentWord  = document.querySelector('#current-word'),
    inputWord = document.querySelector('#input-word'),
    time = document.querySelector('#seconds'),
    timeLeft = document.querySelector('#time-left'),
    score = document.querySelector('#score'),
    message = document.querySelector('#message'),
    difficultyLevel = document.querySelector('#difficulty');


// EVENT LISTENERS
window.addEventListener('load', init);
inputWord.addEventListener('input', startMatch);
difficultyLevel.addEventListener('change', changeLevel);


// FUCNTIONS
function init() { 
    time.textContent = currentLevel;
    showWord();
    // call the countdown function every second
    setInterval(countdown, 1000);
    // cheking the game status every 0.1s
    setInterval(checkStatus, 100);
}
function showWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordDisplayed = words[randomIndex];
    currentWord.textContent = wordDisplayed;
}
function countdown() {
    if (timeCount > 0) {
        // console.log(timeCount);
        timeCount--;   
        timeLeft.textContent = timeCount;
    } else if(timeCount === 0) {
        isPlaying = false;
    }
}
function checkStatus() {
    if(!isPlaying && timeCount === 0) {
        message.textContent = 'Time Up!!';
        scoreCount = 0
        message.className = 'mt-3 text-danger';
    }
}
function startMatch() {
    if (this.value === wordDisplayed) {
        isPlaying = true;
        message.textContent  = 'Correct!!'
        message.className = 'mt-3 text-success'
        this.value = ''
        scoreCount++;
        score.textContent = scoreCount;
        timeCount = currentLevel + 1; // will reset the clock to start the countdown again
        showWord();
    }
}

