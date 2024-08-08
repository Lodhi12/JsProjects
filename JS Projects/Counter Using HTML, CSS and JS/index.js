const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.innerHTML = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.innerHTML = count;
}
resetBtn.onclick = function(){
    count=0;
    countLabel.innerHTML = count;
}