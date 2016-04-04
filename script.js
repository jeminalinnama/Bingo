var page = document.getElementById('page');

function createCards(cardAmount) {
    page.innerHTML = "";
    var cardAmount = document.getElementById('cardAmount').value;
    var cardSize = document.getElementById('cardSize').value;
    var minNumber = document.getElementById('minNumber').value;
    var maxNumber = document.getElementById('maxNumber').value;
    createBingoCard(cardAmount, cardSize);
}

function createBingoCard(cardAmount, size) {
    for (var l = 0; l < cardAmount; l++) {
        createTable(l);
        createRows(l, size)
        createCells(l, size);
        getNumbers(l, size);
    }
}

function createTable(cardId) {
    var newBingoCard = document.createElement('table');
    newBingoCard.setAttribute('id', 'card' + cardId);
    page.appendChild(newBingoCard);
}

function createRows(cardId, size) {
    var currentCard = document.getElementById('card' + cardId);
    var rowId = 0;
    for (var i = 0; i < size; i++) {
        var newRow = document.createElement('tr');
        newRow.setAttribute('id', 'card' + cardId + 'row' + rowId);
        rowId++;
        currentCard.appendChild(newRow);
    }
}

function createCells(cardId, size) {
    var cellId = 0
    for (var k = 0; k < size; k++) {
        var currentRow = document.getElementById('card' + cardId + 'row' + k)
        for (var j = 0; j < size; j++) {
            var newCell = document.createElement('td');
            newCell.setAttribute('id', 'card' + cardId + 'cell' + cellId);
            cellId++;
            currentRow.appendChild(newCell);
        }
    }
}

function getNumbers(cardId, size) {
    var cellCounter = 0;
    var usedNumbers = [];
    var numberHelper = false;
    var cellAmount = size*size;
    for (var i = 0; i < cellAmount; i++) {
        var currentCell = document.getElementById('card' + cardId + 'cell' + cellCounter);
        cellCounter++;
        numberHelper = false;
        while (numberHelper == false) {
            var newNumber = Math.floor(Math.random() * 75) + 1;
            if (usedNumbers.indexOf(newNumber) == -1) {
                currentCell.innerHTML = newNumber;
                usedNumbers.push(newNumber);
                numberHelper = true;
            }
        }
    }
}