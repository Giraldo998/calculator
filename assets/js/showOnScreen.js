
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


export const showOnScreen = () => {
	let arrNumbersOnScreen = [];
	let isOperatorPressed = false;
	let isEqualPressed = false;
	let counter = 0;
	
	const formatAll =()=>{
		arrNumbersOnScreen = [];
		screen.textContent = arrNumbersOnScreen.join('');
		secondScreen.textContent = '';
		firstValue = 0;
		secondValue = 0;
		isEqualPressed = false;
		counter = 0;
	}

	numbers.map((number) => {
		screen.textContent = arrNumbersOnScreen;

		number.addEventListener('click', () => {			
			
			if (isEqualPressed) {
				formatAll();
			}

			if (isOperatorPressed) {
				isOperatorPressed = false;
				screen.textContent = '';
			}

			if (counter<10) {
				counter++;
				screen.textContent += number.textContent;
				arrNumbersOnScreen = [...screen.textContent];
			}
		});
	});

	mathOperators.map((operator) => {
		operator.addEventListener('click', () => {
			isOperatorPressed = true; 
			
			// ° controlar validacion para asignar resultado en firstValue

			(firstValue === 0)
				? firstValue = Number(screen.textContent)
				: secondValue = Number(screen.textContent);

			secondScreen.textContent = firstValue +' '+ operator.textContent;

			if (operator.textContent === '=') {
				isEqualPressed = true;
			}
		});
	});

	deleteButton.addEventListener('click', () => {
		arrNumbersOnScreen.splice(-1, 1);
		screen.textContent = arrNumbersOnScreen.join('');
		counter --;
	});
	
	clearButton.addEventListener('click', () => {
		arrNumbersOnScreen = [];
		screen.textContent = arrNumbersOnScreen.join('');
		counter = 0;
	});

	clearAllButton.addEventListener('click', () => {
		formatAll();
	});
};

export const setFirstValue = (newValue) => {
	firstValue = newValue;
};

showOnScreen();
