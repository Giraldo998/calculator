import {	firstValue,	secondValue, mathOperators, screen,	secondScreen, setFirstValue } from './showOnScreen.js';

export const mathematicalFunctions = () => {
	let mat = undefined;
	let result = 0;
	let isEqualPressed = false;

	mathOperators.map((operator) => {

		operator.addEventListener('click', () => {
			
			if (operator.textContent === '+') {
				mat = '+';
				
				if (firstValue !== 0 && secondValue !== 0) {
					result = firstValue + secondValue;
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent
					setFirstValue(result);
				}
			}

			if (operator.textContent === '-') {
				mat = '-';

				if (firstValue !== 0 && secondValue !== 0) {
					result = firstValue - secondValue;
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent
					setFirstValue(result)
				}
			}

			if (operator.textContent === 'x') {
				mat = 'x';
				
				if (firstValue !== 0 && secondValue !== 0) {
					result = firstValue * secondValue;
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent
					setFirstValue(result)
				}
			}

			if (operator.textContent === '÷') {
				mat = '/';
				
				if (firstValue !== 0 && secondValue !== 0) {
					result = firstValue / secondValue;
					screen.textContent = result;
					secondScreen.textContent = screen.textContent + ' ' + operator.textContent
					setFirstValue(result)
				}
			}	

			if (operator.textContent === '=') {

				if (mat === '+') {
					result = firstValue + secondValue
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent
					isEqualPressed = true;
				}

				if (mat === '-') {
					result = firstValue - secondValue
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent
					isEqualPressed = true;
				}

				if (mat === 'x') {
					result = firstValue * secondValue
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent
					isEqualPressed = true;
				}

				if (mat === '/') {
					result = firstValue / secondValue
					screen.textContent = result;
					secondScreen.textContent = firstValue + ' ' + mat + ' ' + secondValue + ' ' + operator.textContent
					isEqualPressed = true;
				}
			}	
		});
	});
};

mathematicalFunctions();
