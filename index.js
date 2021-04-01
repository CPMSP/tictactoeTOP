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

	// s1.textContent = 'x';

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
		console.log(name);
	};
	const mark = () => {
		console.log(marker);
	};
	return { player, mark };
};

// module
const gameFlow = (() => {
	const playerOne = Player('CP', 'x');
	const playerTwo = Player('Comp', 'o');

	const displayMarks = gameBoard('x');

	displayMarks.displayMoves();

	playerOne.player();
	playerOne.mark();
	playerTwo.player();
	playerTwo.mark();
})();
