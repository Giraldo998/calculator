import {
	firstValue,
	secondValue,
	mathOperators,
	screen,
	secondScreen,
	setFirstValue,
} from './showOnScreen.js';

export const mathematicalFunctions = () => {
	let mat = undefined;
	let result = 0;
	let operatorCountPlus = 0;
	let operatorCountMinus = 0;
	let operatorCountMult = 0;
	let operatorCountDiv = 0;

	const roundResult = (num, decimals = 2) => {
		
		const factor = Math.pow(10, decimals);
		return Math.round(num * factor) / factor;
	};

	mathOperators.map((operator) => {
		operator.addEventListener('click', () => {
			if (operator.textContent === '+') {
				mat = '+';
				operatorCountPlus ++;
				operatorCountMinus = 0;
				operatorCountMult = 0;
				operatorCountDiv = 0;

				if ( firstValue !== 0 && secondValue !== 0 && operatorCountPlus >= 2 ) {
					result = roundResult(firstValue + secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent;
					setFirstValue(result);
				}
			}

			if (operator.textContent === '-') {
				mat = '-';
				operatorCountMinus ++;
				operatorCountPlus = 0;
				operatorCountMult = 0;
				operatorCountDiv = 0;

				if ( firstValue !== 0 && secondValue !== 0 && operatorCountMinus >= 2 ) {
					result = roundResult(firstValue - secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent;
					setFirstValue(result);
				}
			}

			if (operator.textContent === 'x') {
				mat = 'x';
				operatorCountMult ++;
				operatorCountPlus = 0;
				operatorCountMinus = 0;
				operatorCountDiv = 0;

				if ( firstValue !== 0 && secondValue !== 0 && operatorCountMult >= 2 ) {
					result = roundResult(firstValue * secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent;
					setFirstValue(result);
				}
			}

			if (operator.textContent === '÷') {
				mat = '/';
				operatorCountDiv ++;
				operatorCountPlus = 0;
				operatorCountMinus = 0;
				operatorCountMult = 0;

				if ( firstValue !== 0 && secondValue !== 0 && operatorCountDiv >= 2 ) {
					result = roundResult(firstValue / secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent;
					setFirstValue(result);
				}
			}

			if (operator.textContent === '=') {
				operatorCountDiv = 0;
				operatorCountPlus = 0;
				operatorCountMinus = 0;
				operatorCountMult = 0;
				
				if (mat === '+') {
					result = roundResult(firstValue + secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent;
				}

				if (mat === '-') {
					result = roundResult(firstValue - secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent;
				}

				if (mat === 'x') {
					result = roundResult(firstValue * secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent;
				}

				if (mat === '/') {
					result = roundResult(firstValue / secondValue, 3);
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent;
				}
			}
		});
	});
};

mathematicalFunctions();
