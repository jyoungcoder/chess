const chessBoard = document.getElementById('chessboard');
const pieces = {
    r: '♜', n: '♞', b: '♝', q: '♛', k: '♚', p: '♟',
    R: '♖', N: '♘', B: '♗', Q: '♕', K: '♔', P: '♙'
};

// Initial chessboard setup
const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Create the chessboard
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.classList.add('square', (row + col) % 2 === 0 ? 'white' : 'black');

        // Add piece if it exists
        const piece = board[row][col];
        if (piece) {
            const pieceElement = document.createElement('div');
            pieceElement.classList.add('piece');
            pieceElement.textContent = pieces[piece];
            pieceElement.draggable = true; // Enable dragging
            pieceElement.dataset.row = row; // Store piece's row
            pieceElement.dataset.col = col; // Store piece's column
            square.appendChild(pieceElement);
        }

        chessBoard.appendChild(square);
    }
}

// Drag and drop functionality
let draggedPiece = null;

chessBoard.addEventListener('dragstart', (event) => {
    if (event.target.classList.contains('piece')) {
        draggedPiece = event.target; // Get the piece being dragged
    }
});

chessBoard.addEventListener('dragover', (event) => {
    event.preventDefault(); // Prevent default to allow drop
});

chessBoard.addEventListener('drop', (event) => {
    event.preventDefault(); // Prevent default behavior

    // Get the square where the piece is dropped
    const targetSquare = event.target;

    if (targetSquare.classList.contains('square') && draggedPiece) {
        // Move the piece to the new square
        targetSquare.appendChild(draggedPiece);
        
        // Reset draggedPiece
        draggedPiece = null;
    }
});