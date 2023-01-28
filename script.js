let n1 = null, 
    n2 = null,
    op = null;


let add = (n1, n2) => {
    let answer = n1 + n2;
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
        addDiv(n1, 'n1');
    } else if(n1 !== null && n2 === null && op === null){
        popOff(n1, 'n1');
        n1 = (n1 * 10) + parseInt(num);
        addDiv(n1, 'n1');
    } else if(n1 !== null && n2 === null && op !== null){
        n2 = parseInt(num);
        addDiv(n2, 'n2');
    } else {
        popOff(n2, 'n2');
        n2 = (n2 * 10) + parseInt(num);
        addDiv(n2, 'n2');
    }
}

let popOff = (obj, position) => {
    const element = document.querySelector('.' + position);
    element.remove();
}


let addDiv = (num, position) => {
    const display = document.querySelector('.display');
    const content = document.createElement('div');
    content.classList.add(position);
    content.textContent = num;
    display.appendChild(content);
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.innerText === '+' && n1 !== null) {
            op = '+';
            addDiv('+');
        } else if(button.innerText === '-' && n1 !== null) {
            op = '-';
            addDiv('-');
        } else if(button.innerText === 'x' && n1 !== null) {
            op = 'x';
            addDiv('x');
        } else if(button.innerText === '%' && n1 !== null) {
            op = '%';
            addDiv('%');
        } else if(button.innerText === '=' && n1 !== null){
            if(n1 !== null || n2 !== null || op !== null){
                addDiv('=');
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
