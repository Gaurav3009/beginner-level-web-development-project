const operatorButton = document.querySelectorAll('.op');
const numberButton = document.querySelectorAll('.num');
const solveExpression = document.querySelector('.solve');
const powerOperation = document.querySelector('.power');
const decimalButton = document.querySelector('.dec');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.del');
const resultsTab = document.querySelector('#results');
expression = '';
isprevop = true;
isprevdec = true;

function render(val) {
    expression += val;
    resultsTab.textContent = expression;
}

function solve(){
    try{
        expression = eval(expression);
    }catch{
        alert('Invalid Expression!');
        expression = '';
        resultsTab.textContent = '0';
        return;
    }
    resultsTab.textContent = expression;
}

Array.from(numberButton).forEach((item) => {
    item.addEventListener('click', ()=>{
        render(item.innerText);
        isprevop = false;
        isprevdec = false;
    })
});

Array.from(operatorButton).forEach((item) => {
    item.addEventListener('click', ()=>{
        if(!isprevop && !isprevdec){
            render(item.innerText);
            isprevop = true;
        }
    })
});

clearButton.addEventListener('click', ()=>{
    expression = '';
    resultsTab.textContent = 0;

});

deleteButton.addEventListener('click', ()=>{
    expression = expression.slice(0, expression.length - 1);
    expression = expression.length < 1 ? '' : expression; 
    resultsTab.textContent = 0;
});

decimalButton.addEventListener('click', ()=>{
    if(!isprevop && !isprevdec){
        render('.');
        isprevdec = true;
    }
});

powerOperation.addEventListener('click', ()=>{
    if(expression.length > 0 && expression[expression.length - 1] >= 0 && expression[expression.length - 1] <= 9){
        num = '';
        index = 0;
        for(i = expression.length - 1; i >= 0; i--){
            index = i;
            if(expression[i] >= 0 && expression[i] <= 9){
                num = expression[i] + num;
                continue;
            }else{
                break;
            }
        }
        if(num != ''){
            console.log(index);
            expression = expression.slice(0, index == 0 ? index : index + 1);
            console.log(expression);
            expression += Math.pow(parseInt(num), 2);
            console.log(expression);
            resultsTab.textContent = expression;
        }
    }
})

solveExpression.addEventListener('click', solve);