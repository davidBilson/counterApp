let count = 0;
let spanVal = document.querySelector('#value');
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');



decrease.addEventListener('click', function() {
    count -= 1;
    spanVal.textContent = count;
    if (count < 0) {
        spanVal.style.color = 'red';
    } else if (count === 0){
        spanVal.style.color = 'black';
    }
})
reset.addEventListener('click', function(){
    count = 0;
    spanVal.textContent = count;
    spanVal.style.color = 'black';
})

increase.addEventListener('click', function() {
    count += 1;
    spanVal.textContent = count;
    if (count > 0) {
        spanVal.style.color = 'green';
    } else if (count === 0){
        spanVal.style.color = 'black';
    }
})