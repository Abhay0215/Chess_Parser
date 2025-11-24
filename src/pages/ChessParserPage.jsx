import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import InteractiveGrid from '../components/InteractiveGrid';
import CustomCursor from '../components/CustomCursor';
import CustomChessboard from '../components/CustomChessboard';

const ChessParserPage = () => {
    const [boardPosition, setBoardPosition] = useState('start');
    const [moves, setMoves] = useState([]);
    const [currentMoveIndex, setCurrentMoveIndex] = useState(-1);
    const [rawText, setRawText] = useState('');
    const [parsedText, setParsedText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [invalidMoves, setInvalidMoves] = useState(new Set());

    // Replay moves whenever currentMoveIndex or moves change
    useEffect(() => {
        const game = new Chess();
        const newInvalidMoves = new Set();

        if (currentMoveIndex === -1 || moves.length === 0) {
            setBoardPosition('start');
            setInvalidMoves(new Set());
            return;
        }

        for (let i = 0; i <= currentMoveIndex; i++) {
            if (!moves[i]) continue;

            try {
                const result = game.move(moves[i]);
                if (!result) {
                    newInvalidMoves.add(i);
                    break;
                }
            } catch (err) {
                newInvalidMoves.add(i);
                break;
            }
        }

        const newFen = game.fen();
        setBoardPosition(newFen);
        setInvalidMoves(newInvalidMoves);
    }, [currentMoveIndex, moves]);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch(`http://localhost:8001/api/extract?t=${Date.now()}`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            const extractedMoves = data.moves || [];

            setRawText(data.raw_text || '');
            setParsedText(data.parsed_text || '');

            if (extractedMoves.length > 0) {
                setMoves(extractedMoves);
                setCurrentMoveIndex(extractedMoves.length - 1);
            } else {
                setMoves([]);
                setCurrentMoveIndex(-1);
                setBoardPosition('start');
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleMoveEdit = (index, newValue) => {
        const newMoves = [...moves];
        newMoves[index] = newValue;
        setMoves(newMoves);
        // Trigger re-validation by resetting the current index
        if (index <= currentMoveIndex) {
            setCurrentMoveIndex(currentMoveIndex);
        }
    };

    const goToPrevMove = () => {
        setCurrentMoveIndex(prev => Math.max(-1, prev - 1));
    };

    const goToNextMove = () => {
        setCurrentMoveIndex(prev => Math.min(moves.length - 1, prev + 1));
    };

    const resetBoard = () => {
        setCurrentMoveIndex(-1);
    };

    return (
        <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden text-white selection:bg-cyan-500 selection:text-black font-sans">
            <CustomCursor />
            <InteractiveGrid />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.5),rgba(0,0,0,0.8))] pointer-events-none z-0"></div>
            <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 max-w-6xl mx-auto p-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Chess Scoresheet Parser</h1>
                    <p className="text-slate-400 text-lg">Upload a scoresheet image to extract moves and view the game.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl">
                            <label className="block mb-4 text-sm font-medium text-slate-300">Upload Image</label>
                            <input
                                type="file"
                                onChange={handleFileUpload}
                                accept="image/*"
                                className="block w-full text-sm text-slate-300
                                    file:mr-4 file:py-2.5 file:px-6
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-gradient-to-r file:from-cyan-500 file:to-purple-600 file:text-white
                                    hover:file:opacity-90
                                    cursor-pointer transition-all"
                            />
                            {loading && <p className="mt-4 text-cyan-400 animate-pulse">Processing image... This may take a moment.</p>}
                            {error && <p className="mt-4 text-red-400 bg-red-900/20 p-3 rounded-lg border border-red-900/50">{error}</p>}
                        </div>

                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl flex flex-col items-center gap-6">
                            <div className="w-full max-w-[500px]">
                                <CustomChessboard
                                    position={boardPosition}
                                    size={500}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={resetBoard}
                                    disabled={currentMoveIndex === -1}
                                    className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-white/10 text-sm font-medium"
                                >
                                    Reset
                                </button>
                                <button
                                    onClick={goToPrevMove}
                                    disabled={currentMoveIndex === -1}
                                    className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-cyan-500/30 text-cyan-300 font-bold"
                                >
                                    ← Prev
                                </button>
                                <span className="text-slate-400 font-mono w-20 text-center">
                                    {currentMoveIndex === -1 ? "Start" : `${Math.floor(currentMoveIndex / 2) + 1}${currentMoveIndex % 2 === 0 ? '.' : '...'}`}
                                </span>
                                <button
                                    onClick={goToNextMove}
                                    disabled={currentMoveIndex >= moves.length - 1}
                                    className="px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-cyan-500/30 text-cyan-300 font-bold"
                                >
                                    Next →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl h-full max-h-[600px] overflow-y-auto custom-scrollbar">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                                Extracted Moves
                                {invalidMoves.size > 0 && (
                                    <span className="ml-auto text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30">
                                        ⚠️ {invalidMoves.size} Invalid
                                    </span>
                                )}
                            </h2>
                            {moves.length > 0 ? (
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {moves.map((move, index) => {
                                        const isInvalid = invalidMoves.has(index);
                                        const isCurrent = index === currentMoveIndex;

                                        return (
                                            <div
                                                key={index}
                                                className={`flex items-center p-2 rounded-lg border transition-all ${isInvalid
                                                    ? 'bg-red-500/10 border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.2)]'
                                                    : isCurrent
                                                        ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                                                        : 'bg-white/5 border-white/5 hover:bg-white/10'
                                                    }`}
                                            >
                                                <span className="text-slate-500 w-8 font-mono flex-shrink-0">
                                                    {Math.floor(index / 2) + 1}.
                                                </span>
                                                <input
                                                    type="text"
                                                    value={move}
                                                    onChange={(e) => handleMoveEdit(index, e.target.value)}
                                                    onClick={() => setCurrentMoveIndex(index)}
                                                    className={`bg-transparent border-none outline-none font-mono font-bold w-full ${isInvalid
                                                        ? 'text-red-400'
                                                        : isCurrent
                                                            ? 'text-cyan-300'
                                                            : 'text-slate-300'
                                                        }`}
                                                />
                                                {isInvalid && (
                                                    <span className="text-red-400 text-xs ml-1" title="Invalid move">⚠️</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-12 text-slate-500 border-2 border-dashed border-white/10 rounded-xl">
                                    <p>No moves extracted yet.</p>
                                </div>
                            )}

                            <div className="mt-8 space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Raw OCR Text</h3>
                                    <pre className="bg-black/50 p-4 rounded-xl text-xs text-slate-300 overflow-x-auto border border-white/10 font-mono">
                                        {rawText || "Waiting for input..."}
                                    </pre>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">Parsed Text (Pre-LLM)</h3>
                                    <pre className="bg-black/50 p-4 rounded-xl text-xs text-slate-300 overflow-x-auto border border-white/10 font-mono">
                                        {parsedText || "Waiting for input..."}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChessParserPage;
