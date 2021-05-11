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
	// const name = name;
	// const mark = mark;
	return { name, mark };
};

// module to control game itself
const gameFlow = (() => {
	const players = document.querySelector('.playerInfo');

	const start = document.querySelector('.startGame');

	const p1 = document.getElementById('playerOne');
	const p2 = document.getElementById('playerTwo');

	const p1Name = p1.value;
	const p2Name = p2.value;

	const playerOne = Player(p1Name, 'X');
	const playerTwo = Player(p2Name, 'O');

	const p1label = document.createElement('div');
	const p2label = document.createElement('div');
	p1label.textContent = p1Name;
	p2label.textContent = p2Name;

	start.addEventListener('click', () => {
		console.log(p1Name);
		console.log(p2Name);
		players.append(p1label, p2label);
		players.remove(p1, p2);
	});

	// p1.textContent = playerOne.name;
	// p2.textContent = playerTwo.name;

	const p1mark = playerOne.mark;
	const p2mark = playerTwo.mark;

	const gameSpace = Gameboard();
	const spaceToMark = gameSpace.markSpace;

	let turnCount = 0;
	let p1turn = true;

	const message = document.querySelector('.message');

	const checkIsWinner = () => {
		if (winningConditions) {
			message.textContent = 'Winner';
		}
		else {
			message.textContent = 'Tie Game';
		}
		turnCount = 0;
		p1turn = true;
		setTimeout(gameSpace.clearAll(), 5000);
	};

	const turnSequence = () => {
		if (p1turn === true) {
			spaceToMark(p1mark);
			console.log(`p1 turn: ${turnCount}, ${p1turn}`);
		}
		else {
			spaceToMark(p2mark);
			console.log(`p2 turn: ${turnCount}, ${p1turn}`);
		}
		turnCount++;
		p1turn = !p1turn;
		console.log(`turncount: ${turnCount}, ${p1turn}`);
	};

	const game = (() => {
		if (turnCount < 9) {
			turnSequence();
		}
		else {
			checkIsWinner();
		}
	})();
})();
