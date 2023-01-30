let n1 = null, 
    n2 = null,
    op = null;


let add = (n1, n2) => {
    let answer = n1 + n2;
    addDiv(answer, 'result');
};

let sub = (n1, n2) => {
    let answer = n1 - n2;
    addDiv(answer, 'result');
};

let times = (n1, n2) => {
    let answer = n1 * n2;
    addDiv(answer, 'result');
};

let divide = (n1, n2) => {
    let answer = n1 / n2;
    addDiv(answer, 'result');
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
        popOff('n1');
        n1 = (n1 * 10) + parseInt(num);
        addDiv(n1, 'n1');
    } else if(n1 !== null && n2 === null && op !== null){
        n2 = parseInt(num);
        addDiv(n2, 'n2');
    } else {
        popOff('n2');
        n2 = (n2 * 10) + parseInt(num);
        addDiv(n2, 'n2');
    }
}

let popOff = (position) => {
    if(document.querySelector('.' + position)) {
        const element = document.querySelector('.' + position);
        element.remove();
    }
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
            addDiv('+', 'op');
        } else if(button.innerText === '-' && n1 !== null) {
            op = '-';
            addDiv('-', 'op');
        } else if(button.innerText === 'x' && n1 !== null) {
            op = 'x';
            addDiv('x', 'op');
        } else if(button.innerText === '%' && n1 !== null) {
            op = '%';
            addDiv('%', 'op');
        } else if(button.innerText === '=' && n1 !== null){
            if(n1 !== null || n2 !== null || op !== null){
                evaluate(n1, n2, op);
                popOff('n1');
                popOff('n2');
                popOff('op');
                n1 = null;
                n2 = null;
                op = null;
            }
        } else if(button.innerText === 'CLEAR'){
            popOff('n1');
            popOff('n2');
            popOff('op');
            popOff('result');
            n1 = null;
            n2 = null;
            op = null;
        } else if(button.innerText === 'DELETE'){
            if(n1 !== null && op !== null && n2 !== null){
                popOff('n2');
                n2 = null;
            } else if(n1 !== null && op !== null && n2 === null){
                popOff('op');
                op = null;
            } else {
                popOff('n1');
                n1 = null;
            }
        } else if(button.innerText === '.'){
            
        } else {
            getNum(button.innerHTML)
        }
    });
});
