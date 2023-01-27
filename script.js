let n1 = null, 
    n2 = null,
    op = null;


let add = (n1, n2) => {
    let answer = n1 + n2;
    console.log(typeof(answer));
    const display = document.querySelector('.display');
    const content = document.createElement('div');
    content.classList.add('result');
    content.textContent = answer;
    display.appendChild(content);
};

let sub = (n1, n2) => {
    let answer = n1 - n2;
    const display = document.querySelector('.display');
    const content = document.createElement('div');
    content.classList.add('result');
    content.textContent = answer;
    display.appendChild(content);
};

let times = (n1, n2) => {
    let answer = n1 * n2;
    const display = document.querySelector('.display');
    const content = document.createElement('div');
    content.classList.add('result');
    content.textContent = answer;
    display.appendChild(content);
};

let divide = (n1, n2) => {
    let answer = n1 / n2;
    const display = document.querySelector('.display');
    const content = document.createElement('div');
    content.classList.add('result');
    content.textContent = answer;
    display.appendChild(content);
};

let evaluate = (n1, n2, op) => {
    console.log('n1: ' + n1);
    console.log('n2: ' + n2);
    console.log('op: ' + op);
    if(op === '+') {
        add(n1, n2);
    } else if(op === '-') {
        sub(n1, n2);
    } else if(op === 'x') {
        times(n1, n2);
    } else if(op === '%') {
        divide(n1, n2);
    }
}

let getNum = (num) => {
    if(n1 === null){
        n1 = parseInt(num);
    } else if(n1 !== null && n2 === null){
        n2 = parseInt(num);
    }
}
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.innerText === '+') {
            op = '+';
        } else if(button.innerText === '-') {
            op = '-';
        } else if(button.innerText === 'x') {
            op = 'x';
        } else if(button.innerText === '%') {
            op = '%';
        } else if(button.innerText === '='){
            if(n1 !== null || n2 !== null || op !== null){
                evaluate(n1, n2, op);
                n1, n2, op = null;
            }
        } else if(button.innerText === 'CLEAR'){
            const element = document.querySelector('.result');
            element.remove();
        } else {
            getNum(button.innerHTML)
        }
    });
});
