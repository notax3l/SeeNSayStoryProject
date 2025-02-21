// Creating an object that has keys and values that store the story bits
const storybit = {
    1: ["big", "tiny", "purple", "loud", "silly", "happy", "sad", "angry", "sleepy", "hungry"],
    2: ["cat", "dog", "robot", "wizard", "pizza", "banana", "pirate", "ninja", "alien", "zombie"],
    3: ["danced", "jumped", "sang", "whispered", "exploded", "flew", "ate", "slept", "ran", "cried"]
};

// Creating variables required for functionality
const getWordButtons = document.querySelectorAll('.getword');
const resetButton = document.getElementById('resetButton');
const storyText = document.getElementById('storyText');

// Adding event listeners to the buttons
getWordButtons.forEach(button => {
    button.addEventListener('click', function() { //when the button is clicked the custom function will run
        //gets ahold of the data-section attribute , i.e either 1,2 or 3
        const section = this.getAttribute('data-section');
        const wordList = storybit[section]; //gets the array of words from the object
        //randomly selects a word from the array and displys it 
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        document.getElementById(`word${section}`).textContent = randomWord;
        updateStory();
    });
});



