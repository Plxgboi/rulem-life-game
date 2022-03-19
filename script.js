const head = document.getElementById('head');
const money = document.getElementById('money');
const counter = document.getElementById('counter');

let score = 0;

document.addEventListener('keydown', function(event) {
    if(head.classList != 'jump') {
        jump();
    }  
})

function jump() {
    if(head.classList != 'jump') {
        head.classList.add('jump')
    }
    setTimeout(function() {
        head.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval(function() {
    let headtop = parseInt(window.getComputedStyle(head).getPropertyValue('top'))
    let moneyleft = parseInt(window.getComputedStyle(money).getPropertyValue('left'))

    if(moneyleft < 70 && moneyleft > 0 && headtop <= 100) {
        score ++;
        counter.innerHTML = score;
        if(money.classList != 'done') {
            money.classList.add('done')
        }
        setTimeout(function() {
            money.classList.remove('done')
        }, 300)
    }
}, 220)