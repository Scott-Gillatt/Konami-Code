// left Arrow = 37,
// Up Arrow = 38,
// Right Arrow = 39,
// Down Arrow = 40,
// B Key = 66,
// A Key = 65,
// Enter Key = 13

var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]

window.addEventListener("keydown", Konami, false);

var input = []

function Konami(e) {
    input.push(e.keyCode)
    if (input.length === code.length) {
        if (input.join('|') === code.join('|')) {
            alert("You Did IT!!");
            window.open("http://www.google.com")
            input = []
        } else {
            input.shift();
        }
    }
}

// window.addEventListener("keydown", hi, false);
// window.addEventListener("keyup", hi, false)

// var keys = [];

// function hi(e) {
//     keys[e.keyCode] = true;

//     if (e.keyCode === 38) {
//         alert("You pressed " + e.keyCode + ", Good Job!!");
//     }
//     if (e.keyCode === 40) {
//         alert("You pressed " + e.keyCode + ", Good Job!!");
//     }
//     if (e.keyCode === 39) {
//         alert("You pressed " + e.keyCode + ", Good Job!!");
//     }
//     if (e.keyCode === 37) {
//         alert("You pressed " + e.keyCode + ", Good Job!!");
//     }
//     if (e.keyCode === 13) {
//         alert("You pressed " + e.keyCode + ", Good Job!!");
//     }
// }
