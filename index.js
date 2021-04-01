// module
const gameBoard = (mark) => {
	// const wrapper = document.querySelector('.wrapper');

	const s1 = document.querySelector('.space1');
	const s2 = document.querySelector('.space2');
	const s3 = document.querySelector('.space3');
	const s4 = document.querySelector('.space4');
	const s5 = document.querySelector('.space5');
	const s6 = document.querySelector('.space6');
	const s7 = document.querySelector('.space7');
	const s8 = document.querySelector('.space8');
	const s9 = document.querySelector('.space9');

	const gameArea = [
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

	const displayMoves = () => {
		gameArea.forEach((space) => {
			space.addEventListener('click', () => {
				if ((space.textContent = ' ')) {
					space.textContent = mark;
				}
				else {
					return;
				}
			});
		});
	};

	return { gameArea, displayMoves };
};

// factory
const Player = (name, marker) => {
	const player = () => {
		return name;
	};
	const mark = () => {
		return marker;
	};
	return { player, mark };
};

// module
const gameFlow = (() => {
	const playerOne = Player(prompt('What Shall We Call You?', 'Player'), 'X');
	const playerTwo = Player('Comp', 'O');

	const p1 = document.querySelector('.playerOne');
	const p2 = document.querySelector('.playerTwo');

	p1.textContent = `${playerOne.player()} [${playerOne.mark()}]`;
	p2.textContent = `${playerTwo.player()} [${playerTwo.mark()}]`;

	const displayMarks = gameBoard('x');

	displayMarks.displayMoves();

	playerOne.player();
	playerOne.mark();
	playerTwo.player();
	playerTwo.mark();
})();
