import React from 'react';

const CustomChessboard = ({ position, size = 500 }) => {
    // Parse FEN string to get piece positions
    const parseFEN = (fen) => {
        const fenPosition = fen === 'start'
            ? 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
            : fen;

        const rows = fenPosition.split(' ')[0].split('/');
        const board = [];

        rows.forEach((row, rowIndex) => {
            let colIndex = 0;
            for (const char of row) {
                if (isNaN(char)) {
                    board.push({
                        piece: char,
                        row: rowIndex,
                        col: colIndex,
                        square: getSquareName(rowIndex, colIndex)
                    });
                    colIndex++;
                } else {
                    colIndex += parseInt(char);
                }
            }
        });

        return board;
    };

    const getSquareName = (row, col) => {
        const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const rank = 8 - row;
        return files[col] + rank;
    };

    const getPieceSymbol = (piece) => {
        const pieces = {
            'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
            'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
        };
        return pieces[piece] || '';
    };

    const pieces = parseFEN(position);
    const squareSize = size / 8;

    // Create 8x8 grid
    const squares = [];
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const isLight = (row + col) % 2 === 0;
            const piece = pieces.find(p => p.row === row && p.col === col);
            const squareName = getSquareName(row, col);
            const isWhitePiece = piece && piece.piece === piece.piece.toUpperCase();

            squares.push(
                <div
                    key={`${row}-${col}`}
                    style={{
                        width: squareSize,
                        height: squareSize,
                        background: isLight
                            ? 'linear-gradient(135deg, #f0d9b5 0%, #e8d0ad 100%)'
                            : 'linear-gradient(135deg, #b58863 0%, #a87c5a 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: squareSize * 0.7,
                        position: 'relative',
                        userSelect: 'none',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {piece && (
                        <span style={{
                            fontSize: squareSize * 0.8,
                            fontWeight: 'bold',
                            color: isWhitePiece ? '#ffffff' : '#1a1a1a',
                            textShadow: isWhitePiece
                                ? `
                                    0 0 3px rgba(0, 0, 0, 0.8),
                                    0 0 6px rgba(0, 0, 0, 0.6),
                                    0 2px 4px rgba(0, 0, 0, 0.5),
                                    0 0 1px rgba(0, 0, 0, 1)
                                `
                                : `
                                    0 0 3px rgba(255, 255, 255, 0.8),
                                    0 0 6px rgba(255, 255, 255, 0.6),
                                    0 2px 4px rgba(255, 255, 255, 0.4),
                                    0 0 1px rgba(255, 255, 255, 1)
                                `,
                            filter: isWhitePiece
                                ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))'
                                : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2))',
                            cursor: 'default',
                            transition: 'transform 0.2s ease',
                            display: 'inline-block'
                        }}>
                            {getPieceSymbol(piece.piece)}
                        </span>
                    )}
                    {/* Show coordinates on board edges */}
                    {col === 0 && (
                        <span style={{
                            position: 'absolute',
                            top: 3,
                            left: 3,
                            fontSize: squareSize * 0.18,
                            color: isLight ? '#a87c5a' : '#e8d0ad',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            opacity: 0.7
                        }}>
                            {8 - row}
                        </span>
                    )}
                    {row === 7 && (
                        <span style={{
                            position: 'absolute',
                            bottom: 3,
                            right: 3,
                            fontSize: squareSize * 0.18,
                            color: isLight ? '#a87c5a' : '#e8d0ad',
                            fontWeight: 'bold',
                            fontFamily: 'monospace',
                            opacity: 0.7
                        }}>
                            {String.fromCharCode(97 + col)}
                        </span>
                    )}
                </div>
            );
        }
    }

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gridTemplateRows: 'repeat(8, 1fr)',
                width: size,
                height: size,
                border: '4px solid #3a3a3a',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: `
                    0 10px 30px rgba(0, 0, 0, 0.5),
                    0 5px 15px rgba(0, 0, 0, 0.3),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.1)
                `,
                background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)'
            }}
        >
            {squares}
        </div>
    );
};

export default CustomChessboard;
