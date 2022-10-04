//grabs count-el from html
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

//shows that countEl works in console
// console.log(countEl);

//set the count
let count = 0;

//increase the count by one every time button is clicked (attached onClick to button in html)
function increment() {
    count += 1;
    countEl.textContent = count;
}

// 1. Create a function, save(), which logs out the count when it's called and resets count
function save() {
    //puts current count in html when save btn is pressed
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    //reset count
    countEl.textContent = 0;
    count = 0;
};