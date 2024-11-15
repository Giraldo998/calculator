import {
	firstValue,
	secondValue,
	mathOperators,
	screen,
	secondScreen,
	setFirstValue,
	formatValues,
} from './showOnScreen.js';

let currentOperator = undefined;
let operatorCountPlus = 0;
let operatorCountMinus = 0;
let operatorCountMult = 0;
let operatorCountDiv = 0;
export let result = 0;


export const mathematicalFunctions = () => {
	
	const roundResult = (num, decimals = 1) => {
		const factor = Math.pow(10, decimals);
		return Math.round(num * factor) / factor;

	};

	const handleMathematicalFunctions = (operator)=>{
		
		if (operator === '+') {
			currentOperator = '+';
			operatorCountPlus ++;
			operatorCountMinus = 0;
			operatorCountMult = 0;
			operatorCountDiv = 0;

			if (firstValue !== NaN && secondValue!== NaN && operatorCountPlus >= 2 ) {
				result = roundResult(firstValue + secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ${operator}`;
				setFirstValue(result);
			}
		}

		if (operator === '-') {
			currentOperator = '-';
			operatorCountMinus ++;
			operatorCountPlus = 0;
			operatorCountMult = 0;
			operatorCountDiv = 0;

			if ( firstValue !== NaN && secondValue!== NaN && operatorCountMinus >= 2 ) {
				result = roundResult(firstValue - secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ${operator}`;
				setFirstValue(result);
			}
		}

		if (operator === 'x' || operator === '*') {
			currentOperator = 'x';
			operatorCountMult ++;
			operatorCountPlus = 0;
			operatorCountMinus = 0;
			operatorCountDiv = 0;

			if ( firstValue !== NaN && secondValue!== NaN && operatorCountMult >= 2 ) {
				result = roundResult(firstValue * secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} x`;
				setFirstValue(result);
			}
		}

		if (operator === '÷' || operator === '/') {
			currentOperator = '/';
			operatorCountDiv ++;
			operatorCountPlus = 0;
			operatorCountMinus = 0;
			operatorCountMult = 0;

			if ( firstValue !== NaN && secondValue!== NaN && operatorCountDiv >= 2 ) {
				result = roundResult(firstValue / secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ÷`;
				setFirstValue(result);
			}
		}

		if (operator === '=' || operator === 'Enter') {
			operatorCountDiv = 0;
			operatorCountPlus = 0;
			operatorCountMinus = 0;
			operatorCountMult = 0;

			if (currentOperator === '+') {
				result = roundResult(firstValue + secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ${currentOperator} ${secondValue} =`;
			}

			if (currentOperator === '-') {
				result = roundResult(firstValue - secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ${currentOperator} ${secondValue} =`;
			}

			if (currentOperator === 'x') {
				result = roundResult(firstValue * secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} x ${secondValue} =`;
			}

			if (currentOperator === '/') {
				result = roundResult(firstValue / secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ÷ ${secondValue} =`;
			}
			
			if(!currentOperator){
				screen.textContent = result;
				secondScreen.textContent = `${(screen.textContent === '') ? 0 : screen.textContent} =`;
			}			
		}
		
		if (result === 0) {
			formatValues();
		}
		
		result = screen.textContent
	};

	mathOperators.forEach((operator) => {
		operator.addEventListener('click', () => {

			handleMathematicalFunctions(operator.textContent)
			
		});
	});

	document.addEventListener('keyup', (operator)=>{
		
		handleMathematicalFunctions(operator.key)

	});
};

mathematicalFunctions();
