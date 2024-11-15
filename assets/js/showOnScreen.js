const numbers = [
	document.getElementById('btn-0'),
	document.getElementById('btn-1'),
	document.getElementById('btn-2'),
	document.getElementById('btn-3'),
	document.getElementById('btn-4'),
	document.getElementById('btn-5'),
	document.getElementById('btn-6'),
	document.getElementById('btn-7'),
	document.getElementById('btn-8'),
	document.getElementById('btn-9'),
	document.getElementById('decimalPoint'),
	document.getElementById('plusMinus'),
];

export const mathOperators = [
	document.getElementById('add'),
	document.getElementById('substract'),
	document.getElementById('multiply'),
	document.getElementById('divide'),
	document.getElementById('equal'),
];

export const screen = document.getElementById('screen'),
	secondScreen = document.getElementById('opScreen'),
	deleteButton = document.getElementById('delete'),
	clearAllButton = document.getElementById('clearAll'),
	clearButton = document.getElementById('clear');

export let firstValue = 0;
export let secondValue = 0;

export const formatValues = ()=>{
	firstValue = 0
	secondValue = 0
} 

export const showOnScreen = () => {
	let arrNumbersOnScreen = [];
	let isOperatorPressed = false;
	let isEqualPressed = false;
	let counter = 0;

	const handleNumberInput = (number) => {
		if (number !== '±') {
			if (isEqualPressed) formatAll();

			if (isOperatorPressed) {
				isOperatorPressed = false;
				screen.textContent = '';
				counter = 0;
			}

			if (counter < 10) {
				counter++;
				screen.textContent += number;
				arrNumbersOnScreen = [...screen.textContent];
			}

		} else {
			if (screen.textContent !== '') {
				screen.textContent = parseFloat(screen.textContent) * -1;
			}
		}
	};

	const handleOperatorInput = (operator) => {
		
		if (firstValue===0) {
			firstValue = parseFloat(screen.textContent);

		} else {
			if (!isEqualPressed) secondValue = parseFloat(screen.textContent);
		}
		
		if (isEqualPressed) {
			firstValue = parseFloat(screen.textContent);

			if (secondValue===0 && firstValue!==0) {
				secondValue = parseFloat(screen.textContent);
			}
		}

		if (operator === '/' || operator === '÷') {
			secondScreen.textContent = `${firstValue} ÷`;
			
		} else {
			if (operator === '*' || operator === 'x') {
				secondScreen.textContent = `${firstValue} x`;
			
			} else {
				secondScreen.textContent = `${firstValue} ${operator}`;
			}
		}

		if (operator === '=' || operator === 'Enter') {
			isEqualPressed = true;
			isOperatorPressed = false;
			
		} else {
			isOperatorPressed = true;
			isEqualPressed = false;
		}
	};

	const handleDeleteButton = () => {
		if (isEqualPressed) {
			secondScreen.textContent = '';
			
		} else {
			if (!isOperatorPressed) {
				arrNumbersOnScreen.pop();
				screen.textContent = arrNumbersOnScreen.join('');
				counter--;
			}
		}
	};

	const formatAll = () => {
		arrNumbersOnScreen = [];
		screen.textContent = '';
		secondScreen.textContent = '';
		firstValue = 0;
		secondValue = 0;
		isEqualPressed = false;
		isOperatorPressed = false;
		counter = 0;
	};

	numbers.forEach((number) => {
		number.addEventListener('click', () => {
			handleNumberInput(number.textContent);
		});
	});

	document.addEventListener('keyup', (number) => {
		const key = number.key;

		if (!isNaN(key) || key === '.') {
			handleNumberInput(key);
		}
	});

	mathOperators.forEach((operator) => {
		operator.addEventListener('click', () => {
			handleOperatorInput(operator.textContent);
		});
	});

	document.addEventListener('keyup', (operator) => {
		const key = operator.key;

		if (['+', '-', '*', '/', '=', 'Enter'].includes(key)) {
			handleOperatorInput(key);
		}
	});

	deleteButton.addEventListener('click', () => {
		handleDeleteButton();
	});

	document.addEventListener('keydown', (button) => {
		if (button.key === 'Backspace') {
			handleDeleteButton();
		}
	});

	clearButton.addEventListener('click', () => {
		if (isEqualPressed) formatAll();

		arrNumbersOnScreen = [];
		screen.textContent = arrNumbersOnScreen.join('');
		counter = 0;
	});

	clearAllButton.addEventListener('click', () => {
		formatAll();
	});

	document.addEventListener('keyup', (button) => {
		if (button.key === 'Escape') formatAll();
	});
};

export const setFirstValue = (newValue) => {
	firstValue = newValue;
};

showOnScreen();
