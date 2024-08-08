import {
	firstValue,
	secondValue,
	mathOperators,
	screen,
	secondScreen,
	setFirstValue,
} from './showOnScreen.js';

let mat = undefined;
let result = 0;
let operatorCountPlus = 0;
let operatorCountMinus = 0;
let operatorCountMult = 0;
let operatorCountDiv = 0;


export const mathematicalFunctions = () => {
	
	const roundResult = (num, decimals = 1) => {
		
		const factor = Math.pow(10, decimals);
		return Math.round(num * factor) / factor;
	};

	const handleMathematicalFunctions = (operator)=>{
		if (operator === '+') {
			mat = '+';
			operatorCountPlus ++;
			operatorCountMinus = 0;
			operatorCountMult = 0;
			operatorCountDiv = 0;

			if ( firstValue !== 0 && secondValue !== 0 && operatorCountPlus >= 2 ) {
				result = roundResult(firstValue + secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ${operator}`;
				setFirstValue(result);
			}
		}

		if (operator === '-') {
			mat = '-';
			operatorCountMinus ++;
			operatorCountPlus = 0;
			operatorCountMult = 0;
			operatorCountDiv = 0;

			if ( firstValue !== 0 && secondValue !== 0 && operatorCountMinus >= 2 ) {
				result = roundResult(firstValue - secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ${operator}`;
				setFirstValue(result);
			}
		}

		if (operator === 'x') {
			mat = 'x';
			operatorCountMult ++;
			operatorCountPlus = 0;
			operatorCountMinus = 0;
			operatorCountDiv = 0;

			if ( firstValue !== 0 && secondValue !== 0 && operatorCountMult >= 2 ) {
				result = roundResult(firstValue * secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ${operator}`;
				setFirstValue(result);
			}
		}

		if (operator === '÷') {
			mat = '/';
			operatorCountDiv ++;
			operatorCountPlus = 0;
			operatorCountMinus = 0;
			operatorCountMult = 0;

			if ( firstValue !== 0 && secondValue !== 0 && operatorCountDiv >= 2 ) {
				result = roundResult(firstValue / secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${screen.textContent} ${operator}`;
				setFirstValue(result);
			}
		}

		if (operator === '=' || operator==='Enter') {
			operatorCountDiv = 0;
			operatorCountPlus = 0;
			operatorCountMinus = 0;
			operatorCountMult = 0;
			
			if (mat === '+') {
				result = roundResult(firstValue + secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ${mat} ${secondValue} =`;
			}

			if (mat === '-') {
				result = roundResult(firstValue - secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ${mat} ${secondValue} =`;
			}

			if (mat === 'x') {
				result = roundResult(firstValue * secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ${mat} ${secondValue} =`;
			}

			if (mat === '/') {
				result = roundResult(firstValue / secondValue, 8);
				screen.textContent = result;
				secondScreen.textContent = `${firstValue} ${mat} ${secondValue} =`;
			}
		}
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
