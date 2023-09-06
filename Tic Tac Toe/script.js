

var board = document.getElementsByClassName('board')[0], // Игpoвoe noлe 
    player = document.getElementsByClassName('gamer')[0], // Сmpoкa xoдa 
    element, innerElement,
    gamer1 = true, // Показывает, какой игрок сейчас ходит
    gameTable = [[null, null, null], [null, null, null], [null, null, null]], // Mampицa uгpы 
    nullCount = 9, // Кол-во оставшихся ходов
    winner = null;

player.innerText = 'X Turn';

// Генерация игрового поля
for (var i = 0; i < 9; i++) {
    element = document.createElement('div');
    element.classList.add('cell');
    innerElement = document.createElement('div');
    innerElement.classList.add('inner-cell');
    innerElement.onclick = tableClick;
    innerElement.setAttribute('x', (i % 3).toString());
    innerElement.setAttribute('y', parseInt(i / 3).toString());//y зто номер строкu, x - номер столбца
    element.appendChild(innerElement);
    board.appendChild(element);
}
document.getElementsByClassName('button')[0].onclick = reset;


function tableClick() {
    if (this.innerText == '') {
        this.innerText = gamer1 ? 'X' : 'O';
        var y = this.getAttribute('y'), x = this.getAttribute('x');
        gameTable[y][x] = gamer1;
        nullCount--;
        if ((gameTable[y][0] === gamer1 && gameTable[y][1] === gamer1 && gameTable[y][2] === gamer1) ||
            (gameTable[0][x] === gamer1 && gameTable[1][x] === gamer1 && gameTable[2][x] === gamer1) ||
            (gameTable[0][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[2][2] === gamer1) ||
            (gameTable[2][0] === gamer1 && gameTable[1][1] === gamer1 && gameTable[0][2] === gamer1)) {
            winner = gamer1;
        }
        gamer1 = !gamer1;
        player.innerText = gamer1 ? 'X Turn' : 'O Turn';
        if (nullCount == winner !== null) {
            if (winner !== null) {
                if (confirm('Won ' + (winner ? 'X' : 'O') + '.\nWanna play again?')) {
                    reset();
                }
            }
            // else if (confirm('Tie... \nWanna play again?')) {
            //     reset();
            // }
        }
    }
    else {
        alert('Cancelled turn');
    }
}

function reset() {
    gamer1 = true; // Показывает, какой игрок сейчас ходим
    gameTable = [[null, null, null], [null, null, null], [null, null, null]]; // Mampuųa uzpы 
    nullCount = 9; // Кол-во оставшихся ходов
    winner = null;
    var table = document.getElementsByClassName('inner-cell');
    for (var i = 0; i < table.length; i++) {
        table[i].innerText = '';
    }
    player.innerText = 'X Turn';
}