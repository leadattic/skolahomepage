let countEl = document.getElementById("count-el")
let count = 0
let SaveEl = document.getElementById('save-el')
function increment() {
    count += 1
    countEl.innerText = count
}




let saved1 = ' '
let saved2 = ' '
let saved3 = ' '
function addtosaved(){
saved3 = saved2
saved2 = saved1
saved1 = count   
  SaveEl.textContent = 'latest 3 resets at: ' + saved1 + '-' + saved2 + '-' + saved3   
}
function save() {
    console.log(count)
    addtosaved()
    count = 0
}
function reset(){
    console.log('you got ' + count)
    alert('you got ' + count)
    save()
  countEl.innerText = count
}
  saveEl.textContent = 'latest 3 resets at: ' + saved1 + ' - ' + saved2 + ' - ' + saved3  




let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
let gamleBtn = document.getElementById('gamble-btn');
console.log('First card:' + firstCard);
console.log('Second card:' + secondCard);
console.log(sum);


function gamble(){
 firstCard = Math.floor(Math.random() * 10) + 2;
 secondCard = Math.floor(Math.random() * 10) + 2;
 sum = firstCard + secondCard;
gambleBtn.innerText = sum;
}



 







