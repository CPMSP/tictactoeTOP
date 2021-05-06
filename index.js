// module for gameboard, with gameboard spaces array
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

	const gameBoard = [
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
		gameBoard.forEach((space) => {
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
		gameBoard.forEach((space) => {
			space.textContent = '';
		});
	};

	return { markSpace, clearAll };
};

// factory for making players
const Player = (name, mark) => {
	const playerName = name;
	const playerMark = mark;
	return { playerName, playerMark };
};

// module to control game itself
const gameFlow = (() => {
	const p1 = document.querySelector('.playerOne');
	const p2 = document.querySelector('.playerTwo');

	const playerOne = Player('CP', 'X');
	const playerTwo = Player('Comp', 'O');

	p1.textContent = playerOne.playerName;
	p2.textContent = playerTwo.playerName;

	const p1mark = playerOne.playerMark;
	const p2mark = playerTwo.playerMark;

	const gameSpace = Gameboard();
	const spaceToMark = gameSpace.markSpace;

	let turnCount = 0;

	const message = document.querySelector('.message');

	const checkIsWinner = () => {
		if (winningConditions) {
			message.textContent = 'Winner';
		}
		else {
			message.textContent = 'Tie Game';
		}
		setTimeout(gameSpace.clearAll(), 5000);
	};
	const turnSequence = () => {
		if (turnCount < 9) {
			if (turnCount % 2 === 0) {
				spaceToMark(p1mark);
				console.log(`p1 turn: ${turnCount}`);
			}
			else {
				spaceToMark(p2mark);
				console.log(`p2 turn: ${turnCount}`);
			}
			turnCount++;
			console.log(`turncount: ${turnCount}`);
		}
		else {
			checkIsWinner();
		}
	};
	turnSequence();
})();
