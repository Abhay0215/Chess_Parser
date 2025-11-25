import React, { useState, useEffect, useCallback } from 'react';
import { Chess } from 'chess.js';
import InteractiveGrid from '../components/InteractiveGrid';
import CustomCursor from '../components/CustomCursor';
import CustomChessboard from '../components/CustomChessboard';
import { useNavigate } from 'react-router-dom';

const PlayPage = () => {
    const navigate = useNavigate();
    const [game, setGame] = useState(new Chess());
    const [fen, setFen] = useState('start');
    const [isAiThinking, setIsAiThinking] = useState(false);
    const [gameStatus, setGameStatus] = useState('');

    const makeAiMove = useCallback(async (currentFen) => {
        setIsAiThinking(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/engine/move`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fen: currentFen }),
            });

            if (!response.ok) throw new Error('Failed to get AI move');

            const data = await response.json();
            if (data.move) {
                setGame(prevGame => {
                    const newGame = new Chess(prevGame.fen());
                    newGame.move(data.move);
                    setFen(newGame.fen());
                    return newGame;
                });
            }
        } catch (error) {
            console.error("Error getting AI move:", error);
        } finally {
            setIsAiThinking(false);
        }
    }, []);

    function onDrop(sourceSquare, targetSquare) {
        if (isAiThinking || game.isGameOver()) return false;

        try {
            const move = game.move({
                from: sourceSquare,
                to: targetSquare,
                promotion: 'q',
            });

            if (move === null) return false;

            setFen(game.fen());

            if (!game.isGameOver()) {
                // Small delay to make it feel natural
                setTimeout(() => makeAiMove(game.fen()), 500);
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    useEffect(() => {
        if (game.isCheckmate()) setGameStatus('Checkmate!');
        else if (game.isDraw()) setGameStatus('Draw!');
        else if (game.isGameOver()) setGameStatus('Game Over!');
        else setGameStatus('');
    }, [game, fen]);

    const resetGame = () => {
        const newGame = new Chess();
        setGame(newGame);
        setFen('start');
        setGameStatus('');
    };

    return (
        <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white selection:bg-cyan-500 selection:text-black font-sans">
            <CustomCursor />
            <InteractiveGrid />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.5),rgba(0,0,0,0.8))] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-6xl mx-auto p-8 flex flex-col items-center">
                <header className="mb-8 text-center w-full flex justify-between items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-sm font-medium text-slate-300"
                    >
                        ← Back
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Play vs AI
                    </h1>
                    <div className="w-[80px]"></div> {/* Spacer for centering */}
                </header>

                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl flex flex-col items-center gap-6 w-full max-w-[600px]">
                    <div className="w-full aspect-square">
                        <CustomChessboard
                            position={fen}
                            onPieceDrop={onDrop}
                        />
                    </div>

                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${isAiThinking ? 'bg-yellow-400 animate-pulse' : 'bg-green-500'}`}></div>
                            <span className="text-slate-300 font-medium">
                                {isAiThinking ? "AI is thinking..." : "Your Turn"}
                            </span>
                        </div>

                        {gameStatus && (
                            <span className="text-cyan-400 font-bold animate-pulse">
                                {gameStatus}
                            </span>
                        )}

                        <button
                            onClick={resetGame}
                            className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 transition-colors border border-cyan-500/30 text-cyan-300 font-bold text-sm"
                        >
                            New Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayPage;
