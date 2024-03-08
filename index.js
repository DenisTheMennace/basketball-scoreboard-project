let scoreHome = document.getElementById('score-home');
let scoreGuest = document.getElementById('score-guest');
let leader = document.getElementById('leader');
let scoreValueHome = 0;
let scoreValueGuest = 0;

function plusOneHome() {
    scoreValueHome += 1;
    scoreHome.textContent = scoreValueHome;
}

function plusTwoHome() {
    scoreValueHome += 2;
    scoreHome.textContent = scoreValueHome;
}

function plusThreeHome() {
    scoreValueHome += 3;
    scoreHome.textContent = scoreValueHome;
}

function plusOneGuest() {
    scoreValueGuest += 1;
    scoreGuest.textContent = scoreValueGuest;
}

function plusTwoGuest() {
    scoreValueGuest += 2;
    scoreGuest.textContent = scoreValueGuest;
}

function plusThreeGuest() {
    scoreValueGuest += 3;
    scoreGuest.textContent = scoreValueGuest;
}

function resetScore() {
    scoreValueHome = 0;
    scoreValueGuest = 0;
    scoreHome.textContent = scoreValueHome;
    scoreGuest.textContent = scoreValueGuest;
}

let buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if (scoreValueHome > scoreValueGuest) {
            leader.textContent = 'Leader: Home';
            scoreHome.style.color = 'green';
            scoreGuest.style.color = '#f94f6d';
        } else if (scoreValueHome < scoreValueGuest) {
            leader.textContent = 'Leader: Guest';
            scoreGuest.style.color = 'green';
            scoreHome.style.color = '#f94f6d';

        } else {
            leader.textContent = 'Leader: Tie';
            scoreGuest.style.color = '#f94f6d';
            scoreHome.style.color = '#f94f6d';
        }
    });
}