let countEl = document.getElementById("count-el")
let count = 0
let SaveEl = document.getElementById('save-el')
function increment() {
    count = count + 1
    countEl.innerText = count
}




let saved1 = ' '
let saved2 = ' '
let saved3 = ' '
function addtosaved(){
saved3 = saved2
saved2 = saved1
saved1 = count   
  SaveEl.innerText = 'latest resets at: ' + saved1 + '-' + saved2 + '-' + saved3   
}
function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph
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
  SaveEl.innerText = 'latest resets at: ' + saved1 + '-' + saved2 + '-' + saved3  