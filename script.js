const numbers = document.querySelectorAll('.number')
const display = document.querySelector('.operandi')
const resetButton = document.querySelector('#reset')
const equal = document.querySelector('#equal')
const buttons = document.querySelectorAll('.digits button')
const score = document.querySelector('.score')



const addition = (acc, element) => acc + element;
const subtract = (acc, element) => acc - element;
const multiple = (acc, element) => acc * element;
const divide = (acc, element) => acc / element;

let selectedButtons = []
let result = 0
let num = ''
let operation;

buttons.forEach((element) => {
    element.addEventListener('click', () => {
        if (isFinite(parseInt(element.innerHTML))) {
            num += element.innerHTML
            display.innerHTML = num
            selectedButtons.push(parseInt(num))
            result = operation ? selectedButtons.reduce(operation) : num
            console.log(selectedButtons);
            console.log(num);
        }
        else if (element.innerHTML === '+') {
            operation = addition
            num = ''
            display.innerHTML = result
            selectedButtons = []
            selectedButtons.push(parseInt(result))
            console.log(selectedButtons);
        }
        else if (element.innerHTML === '-') {
            operation = subtract
            num = ''
            display.innerHTML = result
            selectedButtons = []
            selectedButtons.push(parseInt(result))
        }
        else if (element.innerHTML === 'x') {
            operation = multiple
            num = ''
            display.innerHTML = result
            selectedButtons = []
            selectedButtons.push(parseInt(result))
        }
        else if (element.innerHTML === '/') {
            operation = divide
            num = ''
            display.innerHTML = result
            selectedButtons = []
            selectedButtons.push(parseInt(result))
        }
        score.innerHTML = result
    })
})

resetButton.addEventListener('click', () => {
    result = '';
    operand = '';
    operands = []
    display.innerHTML = operand
})
//             num = ''
//             selectedButtons[1] = element.innerHTML
//             result = selectedButtons[0].reduce(addition)
//             display.innerHTML = result
//             console.log(result);
//             console.log(selectedButtons);
//         }
//         else if (
//             element.innerHTML === '-'
//         ) {
//             operation = subtract
//             if (result) {
//                 selectedButtons[0] = [];
//                 selectedButtons[0].push(result)
//             }
//             selectedButtons[0].push(parseInt(num))
//             num = ''
//             selectedButtons[1] = element.innerHTML
//             result = selectedButtons[0].reduce(subtract)
//             display.innerHTML = result
//             console.log(result);
//             console.log(selectedButtons);
//         }
//     })
// })

let operand = ''
let operands = []

// numbers.forEach(element => element.addEventListener('click', () => {
//     display.innerHTML = ''
//     operand += element.innerHTML
//     display.innerHTML = operand;
//     pushOperand(operand)
// }))

function pushOperand(number) {
    operands.push(parseInt(number))
    // console.log(operands);
}

// function add() {
//     result ? pushOperand(result) : null
//     operand = ''
//     let sum = operands.reduce((acc, element) => {
//         return acc + element
//     })
//     result = sum
//     display.innerHTML = sum
//     operands = []
//     // console.log(operands);
//     return display.innerHTML = sum
// }

// function divide() {
//     pushOperand(result)
//     operand = ''
//     let sum = operands.reduce((acc, element) => {
//         return acc / element
//     })
//     result = sum
//     display.innerHTML = sum
//     operands = []
//     // console.log(operands);
//     return display.innerHTML = sum

// }

// addition.addEventListener('click', () => {
//     add()
//     operation = add
//     console.log(operands);
// })

// division.addEventListener('click', () => {
//     divide()
//     operation = divide
// console.log(operands);
// })
