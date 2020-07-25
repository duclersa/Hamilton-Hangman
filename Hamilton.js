
//this is the array that hikds all the songs
var hamilton_songs = [   

    "Alexander Hamilton", "Aaron Burr, Sir", "My Shot", "The Story of Tonight", "The Schuyler Sisters" , 
    "Farmer Refuted", "You’ll Be Back", "Right Hand Man", "A Winter’s Ball", "Helpless", "Satisfied", "The Story of Tonight (Reprise)",
    "Wait For It", "Stay Alive", "Ten Duel Commandments", "Meet Me Inside", "That Would Be Enough", "Guns and Ships", 
    "History Has Its Eyes on You", "Yorktown (The World Turned Upside Down)", "What Comes Next?", "Dear Theodosia", "Non-Stop",
    "What I'd Miss", "Cabinet Battle #1", "Take a Break",
    "Say No to This", "The Room Where It Happens", "Schuyler Defeated", "Cabinet Battle two", "Washington on Your Side",
    "One Last Time", "I Know Him", "The Adams Administration", "We Know", "Hurricane", "The Reynolds Pamphlet",
    "Burn", "Blow Us All Away", "Stay Alive Reprise", "It's Quiet Uptown", "The Election of 1800", "Your Obedient Servant",
    "Best of Wives and Best of Women", "The World Was Wide Enough", "Who Lives, Who Dies, Who Tells Your Story",
    "My Shot Rise Up Remix"
]
//This is where i declare all the variables that i will need
    var song = ''; //is the answer to the  particular hangman game
    var maxIncorrect = 8; //maximum number of words you can get wrong
    var IncGuesses = 0; //your incorrect guesses
    var guessedLetters = []; //the array where all the wrong guessed letters are stored
    var songStatus = null;

    function randomSong() {
        song = hamilton_songs[Math.floor(Math.random() * hamilton_songs.length)];
        alert(song);

    }

    //function for creating the letter board
    function letterBoard() { 
        var letterButtons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
          
            `
            <button 
              class="letter-btn"
              id='` + letter + `' 
              conClick="handleGuesses('` + letter + `')"
              >
                ` + letter + `
                </button>
                `).join('');

                document.getElementById('board').innerHTML = letterButtons
        }

    //checks to see if the letter exists and if not, pushes the letter into the guessedLetters array and disables the letter so itisnt picked again.
    function guessHandler(letterChoice) {
            guessedLetters.indexOf(letterChoice) === -1 ? guessedLetters.push(letterChoice) : null;
            document.getElementById(letterChoice).setAttribute('disabled', true);

        //come back and add code
        if(song.indexOf(letterChoice) >= 0 ) {
            guessSong();
            gameWon();
        }
        else if(song.indexOf(letterChoice) < 0) {
            IncGuesses++;
            updateIncGuesses();
            gameLost();
        }

        }
    //checks to see of player won the game
    function gameWon() {
        if(songStatus === answer){
            document.getElementById('board').innerHTML = 'Congrats! You Won!';
        }

    }
    //checks to see if player lost the game
    function gameLost() {
        if(IncGuesses === maxIncorrect ) {
            document.getElementsById('board').innerHTML = 'Sorry! Try Again Next Time';
            //answer was code
        }
       // document.getElementById('maxInccorect').innerHTML = maxIncorrect;
    }

    //This is where the letters that are guessed and correct goes  
    function guessSong() {
        songStatus = song.split('').map(letter => (guessedLetters.indexOf(letter) >= 0 ? letter : " _ ")).join('');
        document.getElementById('guessSong').innerHTML = songStatus;
    }

    function updateIncGuesses() {
        document.getElementById('IncGuesses').innerHTML = IncGuesses;
    }
    
    function gameReset() {
        IncGuesses = 0;
        guessedLetters = [];
        
        randomSong();
        guessSong();
        updateIncGuesses();
        letterBoard();
        
     }
  

    randomSong();
    letterBoard();
    guessSong();