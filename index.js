// module for gameSpace, with gameSpace spaces array
const Gameboard = () => {
	const s1 = document.querySelector('.space1');
	const s2 = document.querySelector('.space2');
	const s3 = document.querySelector('.space3');
	const s4 = document.querySelector('.space4');
	const s5 = document.querySelector('.space5');
	const s6 = document.querySelector('.space6');
	const s7 = document.querySelector('.space7');
	const s8 = document.querySelector('.space8');
	const s9 = document.querySelector('.space9');

	const gameSpaces = [
		s1,
		s2,
		s3,
		s4,
		s5,
		s6,
		s7,
		s8,
		s9
	];

	const message = document.querySelector('.message');

	const markSpace = (mark) => {
		gameSpaces.forEach((space) => {
			space.addEventListener('click', () => {
				if (space.textContent === '') {
					space.textContent = mark;
				}
				else {
					message.textContent = 'Please choose an unoccupied space';
					setTimeout(() => {
						message.textContent = '';
					}, 1000);
				}
			});
		});
	};

	const clearAll = () => {
		gameSpaces.forEach((space) => {
			space.textContent = '';
		});
	};

	return { gameSpaces, markSpace, clearAll };
};

// factory for making players
const Player = (name, mark) => {
	return { name, mark };
};

// module to control game itself
const gameFlow = (() => {
	const start = document.querySelector('.startGame');
	const message = document.querySelector('.message');

	const p1 = document.querySelector('.playerOne');
	const p2 = document.querySelector('.playerTwo');

	const playerOne = Player('Player 1', 'X');
	const playerTwo = Player('Player 2', 'O');

	start.addEventListener('click', () => {
		game();
	});

	p1.textContent = playerOne.name;
	p2.textContent = playerTwo.name;

	const p1mark = playerOne.mark;
	const p2mark = playerTwo.mark;

	const gameController = Gameboard();
	const spaceToMark = gameController.markSpace;

	let turnCount = 0;

	const boardSpaces = gameController.gameSpaces;
	boardSpaces.forEach((space) => {
		space.addEventListener('click', () => {
			console.log('clicked');
			// turnCount++;
			// game();
		});
	});

	const clear = gameController.clearAll;

	// const winningConditions = [];

	let winningConditions = null;

	const turnSequence = (mark) => {
		spaceToMark(mark);
		turnCount++;
		console.log(`turncount: #${turnCount}, mark: ${mark}`);
	};

	const checkIsWinner = () => {
		if (winningConditions) {
			message.textContent = 'Winner';
		}
		else if (!winningConditions) {
			message.textContent = 'Tie Game';
		}
		turnCount = 0;
		setTimeout(clear, 5000);
	};

	const game = () => {
		if (turnCount < 9 && winningConditions === null) {
			if (turnCount % 2 === 0) {
				console.log(`p1mk; TC %: ${turnCount % 2}`);
				turnSequence(p1mark);
			}
			else if (turnCount % 2 !== 0) {
				console.log(`p2mk; TC %: ${turnCount % 2}`);
				turnSequence(p2mark);
			}
		}
		else {
			winningConditions = true;
			console.log('Winner');
			checkIsWinner();
		}
	};
})();
