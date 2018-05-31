console.log("lover of script loaded");

const passions = [
    "computer science",
    "fresh seafood",
    "ripe fruit",
    "mountain climbing",
    "sightseeing",
    "nature",
    "strong communities",
    "discovering new music",
    "the Midwest",
    "trying new things",
    "swimming",
    "genuine laughter",
    "electronic music",
    "good documentaries",
    "Michigan football games",
    "the NBA",
    "the Detroit Pistons",
    "conquering challenges",
    "Asian food",
    "American politics",
    "great leadership",
    "eloquent writing",
    "traveling to foreign lands",
    "personal development",
    "vibrant colors",
    "still life",
    "game theory",
    "Super Smash Bros. Melee",
    "Old School Runescape",
    "League of Legends",
    "helping others",
    "drawing",
    "video game design",
    "understanding other perspectives",
    "freshly made food",
    "black cats",
    "concerts"
];

let alreadyDisplayed = {};

function resetAlreadyDisplayed() {
    for (let i = 0; i < passions.length; ++i) {
        alreadyDisplayed[i] = false;
    }
}

resetAlreadyDisplayed();

window.setInterval(function() {
    //reset alreadyDisplayed vals if necessary
    let allUsed = true;
    for (key in alreadyDisplayed) {
        if (!alreadyDisplayed[key]) {
            allUsed = false;
            break;
        }
    }
    if (allUsed) {
        resetAlreadyDisplayed();
    }

    let idx = Math.floor(Math.random() * passions.length);
    while (alreadyDisplayed[idx]) {
        idx = Math.floor(Math.random() * passions.length);
    }
    $('#loverOf').text(passions[idx]);
    alreadyDisplayed[idx] = true;
}, 1800);