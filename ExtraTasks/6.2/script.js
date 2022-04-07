const arrField = [
    {
        field:'empty',
        id: 1,
    },
    {
        field:'empty',
        id: 2,
    },
    {
        field:'empty',
        id: 3,
    },
    {
        field:'empty',
        id: 4,
    },
    {
        field:'empty',
        id: 5,
    },
    {
        field:'empty',
        id: 6,
    },
    {
        field:'empty',
        id: 7,
    },
    {
        field:'empty',
        id: 8,
    },
    {
        field:'empty',
        id: 9,
    },
];

const checkWinner = (currentPlayer) =>{
    return currentPlayer === 'cross' ? 'Player' : 'Computer';
}

const checkWin = (currentPlayer) => {
    const gameBoard = document.querySelector('.container-game')
    if (arrField[0].field === currentPlayer && arrField[1].field === currentPlayer && arrField[2].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[3].field === currentPlayer && arrField[4].field === currentPlayer && arrField[5].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[6].field === currentPlayer && arrField[7].field === currentPlayer && arrField[8].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[0].field === currentPlayer && arrField[3].field === currentPlayer && arrField[6].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[1].field === currentPlayer && arrField[4].field === currentPlayer && arrField[7].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[2].field === currentPlayer && arrField[5].field === currentPlayer && arrField[8].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[0].field === currentPlayer && arrField[4].field === currentPlayer && arrField[8].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    if (arrField[2].field === currentPlayer && arrField[4].field === currentPlayer && arrField[6].field === currentPlayer){
        const winner = checkWinner(currentPlayer);
        alert(`${winner} win`);
        gameBoard.removeEventListener('click', addCross);
        return 'win';
    }

    const draw = arrField.find(element => element.field === 'empty');
    if(!draw){
        alert(`It is draw`);
        gameBoard.removeEventListener('click', addCross);
        return 'draw';
    }
}

const randomizePosition = (arr) =>{
    const randomNumber = Math.floor(Math.random() * (arr.length - 1 + 1)) + 1;
    return arr[randomNumber - 1].id;
}

const changeArrField = (idElement, currentPlayer) =>{
    arrField.forEach(element => {
        if(element.id === +idElement){
            element.field = currentPlayer;
        }
    })
}

const addZero = () =>{
    const arrWithoutCross = arrField.filter(element => element.field === 'empty');
    const position = randomizePosition(arrWithoutCross);
    arrField[position - 1].field = 'zero';
    document.getElementById(position).innerHTML = '<img src="img/zero.svg">';;
}

const addCross = (event) =>{
    isTurn = true;

    const target = arrField.filter(element => element.id === +event.target.id);

    if(target[0].field !== 'empty') return;

    if(event.target.tagName === 'DIV' && event.target.id){
        event.target.innerHTML = '<img src="img/cross.svg">';
        changeArrField(event.target.id, 'cross');
        isTurn = false;
        if (checkWin('cross') === 'win' || checkWin('cross') === 'draw'){
            return;
        };
    }

    if(!isTurn){
        addZero();
        isTurn = true;
        if (checkWin('zero') === 'win' || checkWin('zero') === 'draw'){
            return;
        };
    }

}

const loadGame = (event) =>{
    const gameBoard = document.querySelector('.container-game');
    gameBoard.addEventListener('click', addCross);
}

window.addEventListener('load', loadGame);

// Работает, но без красивостей, доделаю красивость к завтрашней проверке

