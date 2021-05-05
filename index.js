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

	const spaceListeners = (mark) => {
		gameBoard.forEach((space) => {
			space.addEventListener('click', () => {
				if (space.textContent === '') {
					space.textContent = mark;
				}
				else {
					alert('Please choose an unoccupied space');
				}
			});
		});
	};

	return { spaceListeners };
};

// factory for making players
const Player = (name, mark) => {
	const playerName = name;
	const playerMark = mark;
	return { playerName, playerMark };
};

// module to control game itself
const gameFlow = (() => {
	console.log('inside gameFlow');
	const p1 = document.querySelector('.playerOne');
	const p2 = document.querySelector('.playerTwo');

	// const p1Name = playerOne.textContent;
	// const p2Name = playerTwo.textContent;

	const playerOne = Player('CP', 'X');
	const playerTwo = Player('Comp', 'O');

	p1.textContent = playerOne.playerName;
	p2.textContent = playerTwo.playerName;

	let p1turn = true;

	const markSpace = (() => {
		console.log('inside markSpace');
		const p1mark = playerOne.playerMark;
		console.log(`P1 Mark: ${p1mark}`);
		const p2mark = playerTwo.playerMark;
		console.log(`P2 Mark: ${p2mark}`);

		const gameSpace = Gameboard();

		console.log(`P1 Turn: ${p1turn}`);

		if ((p1turn = true)) {
			p1turn = !p1turn;
			gameSpace.spaceListeners(p1mark);
		}
		else {
			p1turn = !p1turn;
			gameSpace.spaceListeners(p2mark);
		}
	})();
})();
